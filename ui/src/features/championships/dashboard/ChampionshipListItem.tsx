import { observer } from 'mobx-react-lite'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Grid, Header } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'
import ChampionDetails from '../details/ChampionDetails'
import ChampionshipDetailsHeader from '../details/ChampionshipDetailsHeader'
import TopScorerDetails from '../details/TopScorerDetails'
import ChampionBetForm from '../form/ChampionBetForm'
import ChampionshipForm from '../form/ChampionshipForm'
import FilterTeamForm from '../form/FilterTeamForm'

export default observer(function ChampionshipListItem() {
  const { championshipStore, modalStore: { openModal }, userStore: { getRoles } } = useStore();
  const { championshipsByCountry } = championshipStore

  const startDate = new Date(2022, 11, 20, 16)
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
              <>
                <Button.Group fluid>
                  <Button 
                    content='Ustaw Zwycięzcę Turnieju'
                    primary
                    onClick={() => openModal(<ChampionshipForm id={champ.id} />)} />
                  <Button.Or text='lub' />
                  <Button 
                    content='Ustaw Króla Strzelców'
                    primary
                    onClick={() => openModal(<ChampionshipForm id={champ.id} />)} />
                </Button.Group>
              </>
              :
              <Grid columns={2}>
                <Grid.Column width={8}>
                  <Header size='large' content='Zwycięzca turnieju' />
                  <ChampionDetails winnerId={champ.winnerId} />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Header size='large' content='Król strzelców' />
                  <TopScorerDetails topScorerId={champ.topScorerId} />
                </Grid.Column>
              </Grid>
            }
            <Grid.Row>
              {startDate.getTime() >= Date.now() ?
                <b>
                  Pamietaj, aby obstawić króla strzelców oraz zwycięzcę przed rozpoczęciem turnieju (20-11: 16:00)
                  <Button.Group fluid>
                    <Button style={{ marginTop: '1em' }}
                      content='Wybierz Zwycięzcę Turnieju'
                      primary basic
                      onClick={() => openModal(<ChampionBetForm />)} />
                    <Button style={{ marginTop: '1em' }}
                      content='Wybierz Króla Strzelców'
                      primary basic
                      onClick={() => openModal(<FilterTeamForm />)} />
                  </Button.Group>
                </b>
                :
                <b>
                  Zobacz typy pozostałych graczy
                  <Button.Group fluid>
                    <Button
                      content='Zwycięzcy'
                      primary basic
                      as={NavLink} to='/champion-Bets'
                    />
                    <Button
                      content='Króle'
                      primary basic
                      as={NavLink} to='/top-scorer-Bets'
                    />
                  </Button.Group>
                </b>
              }
            </Grid.Row>
          </Grid.Column>
        </Grid>
      ))}
    </div >
  )
})
