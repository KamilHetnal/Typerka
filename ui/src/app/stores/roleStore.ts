import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { Role, RoleFormValues } from '../models/Role';
import {UserRole} from '../models/UserRole';

export default class RoleStore {
  roles: Role[] = [];
  userRoles: UserRole[] = [];
  roleRegistry = new Map<string, Role>();
  userRoleRegistry = new Map<string, UserRole>();
  role: Role | undefined = undefined;
  userRole: UserRole | undefined = undefined;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  get userRolesToArray() {
    return Array.from(this.userRoleRegistry.values());
  }

  get groupedUserRoles() {
    return Object.entries(
      this.userRolesToArray.reduce((groups, item) => {
        try{
          item.roleId = this.getRole(item.roleId)!.name;
        }
        catch (error)
        {
          console.log(error);
        }
          groups[item.userId] = groups[item.userId]
          ? [...groups[item.userId], item]
          : [item];
          return groups;
      }, {} as { [key: string]: UserRole[] })
    );
  }

  loadUserRoles = async () => {
    this.setLoadingInitial(true);
    try {
      const userRoles = await agent.Roles.userRoleList();
      userRoles.forEach((userRole) => {
        try{
          userRole.roleId = this.getRole(userRole.roleId)!.name;
        }
        catch (error)
        {
          console.log(error);
        }
        this.userRoles?.push(userRole)
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  get rolesToArray() {
    return Array.from(this.roleRegistry.values());
  }

  get groupedRoles() {
    return Object.entries(
      this.rolesToArray.reduce((groups, item) => {
        groups[item.id] = groups[item.id] ? [...groups[item.id], item] : [item];
        return groups;
      }, {} as { [key: string]: Role[] })
    );
  }

  loadRoles = async () => {
    this.setLoadingInitial(true);
    try {
      const roles = await agent.Roles.list();
      roles.forEach((role) => {
        this.setRole(role);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  };

  loadRole = async (id: string) => {
    let role = this.getRole(id);
    if (role) {
      this.role = role;
      return role;
    } else {
      this.setLoadingInitial(true);
      try {
        const product = await agent.Roles.details(id);
        runInAction(() => {
          this.role = product;
          this.setLoadingInitial(false);
        });
        this.setRole(product);
        return this.role;
      } catch (error) {
        console.log(error);
        runInAction(() => this.setLoadingInitial(false));
      }
    }
  };

  createRole = async (role: RoleFormValues) => {
    try {
      await agent.Roles.create(role);
      const newRole = new Role(role);
      this.setRole(newRole);
      runInAction(() => {
        this.roleRegistry.set(newRole.id, newRole);
        this.role = newRole;
      });
    } catch (error) {
      console.log(error);
    }
  };

  updateRole = async (role: RoleFormValues) => {
    try {
      await agent.Roles.update(role);
      runInAction(() => {
        if (role.id) {
          let updatedRole = { ...this.getRole(role.id), ...role };
          this.roleRegistry.set(role.id, updatedRole as Role);
          this.role = updatedRole as Role;
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  deleteRole = async (id: string) => {
    try {
      await agent.Roles.delete(id);
      runInAction(() => {
        this.roleRegistry.delete(id);
      });
    } catch (error) {
      console.log(error);
    }
  };

  deleteFromRole = async (roleName: string, userName: string) => {
    try {
      await agent.Roles.removeFromRole(roleName, userName);

    } catch (error) {
      console.log(error);
    }
  };

  addToRole = async (roleName: string, userName: string) => {
    try {
      await agent.Roles.addToRole(roleName, userName);

    } catch (error) {
      console.log(error);
    }
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  private getUserRole = (id: string) => {
    return this.userRoleRegistry.get(id);
  };

  private setUserRole = (userRole: UserRole) => {
    this.userRoleRegistry.set(userRole.roleId, userRole);
  };

  private getRole = (id: string) => {
    return this.roleRegistry.get(id);
  };

  private setRole = (role: Role) => {
    this.roleRegistry.set(role.id, role);
  };
}
