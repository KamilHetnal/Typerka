export interface Role {
    id: string;
    name: string;
    normalizedName: string;
}

export class Role implements Role {
    constructor(init?: RoleFormValues) {
        Object.assign(this, init);
    }
}

export class RoleFormValues {
    id?: string = undefined;
    name: string = '';
    normalizedName: string = '';

    constructor(role?: RoleFormValues) {
        if(role) {
            this.id = role.id;
            this.name = role.name;
            this.normalizedName = role.normalizedName
        }
    }
}