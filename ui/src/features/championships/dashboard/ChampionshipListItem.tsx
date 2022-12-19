import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Grid, Header } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'
import ChampionBetDetails from '../details/ChampionBetDetails'
import ChampionDetails from '../details/ChampionDetails'
import ChampionshipDetailsHeader from '../details/ChampionshipDetailsHeader'
import TopScorerBetDetails from '../details/TopScorerBetDetails'
import TopScorerDetails from '../details/TopScorerDetails'
import ChampionBetForm from '../form/ChampionBetForm'
import ChampionshipForm from '../form/ChampionshipForm'
import FilterTeamForm from '../form/FilterTeamForm'

export default observer(function ChampionshipListItem() {
  const { championshipStore, modalStore: { openModal }, userStore: { getRoles, user }, profileStore } = useStore();
  const { championshipsByCountry } = championshipStore
  const { loadProfile, profile } = profileStore

  useEffect(() => {
    loadProfile(user?.username!);
  }, [loadProfile, user])

  const startDate = new Date(2022, 10, 20, 17)
  const decodedRole = getRoles();

  const style = {
    backgroundColor: 'white',
    borderRadius: 5
  }

  return (
    <div>
      {championshipsByCountry.filter(x => x.country.toLowerCase() === "katar").map((champ) => (
        <Grid columns={2} key={champ.id} style={style} stackable>
          <Grid.Column width={8}>
            <ChampionshipDetailsHeader champ={champ} />
          </Grid.Column>
          <Grid.Column width={8}>
            {decodedRole?.includes('admin') ?
              <Button
                fluid
                content='Ustaw Zwycięzcę Turnieju'
                primary
                onClick={() => openModal(<ChampionshipForm id={champ.id} />)} />
              :
              <Grid columns={2}>
                <Grid.Column width={8}>
                  <Header size='large' content='Zwycięzca turnieju' />
                  <ChampionDetails winnerId={champ.winnerId ? champ.winnerId : ''} />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Header size='large' content='Król strzelców' />
                  <TopScorerDetails topScorerId={champ.topScorerId ? champ.topScorerId : ''} />
                </Grid.Column>
              </Grid>
            }
            <Grid.Row>
              {startDate.getTime() >= Date.now() ?
                <b>
                  Pamietaj, aby obstawić króla strzelców oraz zwycięzcę przed rozpoczęciem turnieju (20-11: 16:00)
                  <Grid>
                    <Grid.Column width={8}>
                      <Button
                        fluid
                        style={{ marginTop: '1em' }}
                        content='Wybierz Zwycięzcę Turnieju'
                        primary basic
                        onClick={() => openModal(<ChampionBetForm />)} />
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <Button
                        fluid
                        style={{ marginTop: '1em' }}
                        content='Wybierz Króla Strzelców'
                        primary basic
                        onClick={() => openModal(<FilterTeamForm />)} />
                    </Grid.Column>
                  </Grid>
                </b>
                :
                <b>
                  <br/>
                  Zobacz typy pozostałych graczy
                  <Grid>
                    <Grid.Column width={8}>
                      <Button
                        content='Zwycięzcy'
                        primary basic fluid
                        as={NavLink} to='/champion-Bets'
                      />
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <Button
                        content='Królowie'
                        primary basic fluid
                        as={NavLink} to='/top-scorer-Bets'
                      />
                    </Grid.Column>
                  </Grid>
                </b>
              }
            </Grid.Row>
            <Grid columns={2}>
              <Grid.Column width={8}>
                {profile?.championBet ?
                  <ChampionBetDetails betChampionId={profile?.championBet.championId!} />
                  : <></>}
              </Grid.Column>
              <Grid.Column width={8}>
                {profile?.topScorerBet ?
                  <TopScorerBetDetails betTopScorerId={profile?.topScorerBet.topScorerId!} />
                  : <></>}
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>
      ))}
    </div >
  )
})
