import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import LadderMatchItem from './LadderMatchItem';

export default observer(function LadderDashboard() {
  const { matchStore } = useStore();
  const { loadMatches, matches, loadingInitial } = matchStore;

  useEffect(() => {
    if (matches.length <= 1)
      loadMatches()
  }, [matches.length, loadMatches])
  const ladderMatches = matches.slice(48)

  if (loadingInitial) return <LoadingComponent content='Zbieram dane' />
  return (
    <>
      <Grid columns={5} verticalAlign='middle' centered>
        <Grid.Row only='computer'>
          <Grid.Column width={3} >
            <Segment.Group >
              <LadderMatchItem match={ladderMatches[0]} home={'A1'} away={'2B'} title={'1/8 finału #1'} />
              <LadderMatchItem match={ladderMatches[1]} home={'1C'} away={'2D'} title={'1/8 finału #2'} />
            </Segment.Group>
            <Segment.Group>
              <LadderMatchItem match={ladderMatches[4]} home={'1E'} away={'2F'} title={'1/8 finału #5'} />
              <LadderMatchItem match={ladderMatches[5]} home={'1G'} away={'2H'} title={'1/8 finału #6'} />
            </Segment.Group>
          </Grid.Column>

          <Grid.Column width={3}>
            <Segment.Group>
              <LadderMatchItem match={ladderMatches[8]} home={'Gospodaż (1)'} away={'Gość (1)'} title={'1/4 finału #1'} />
              <LadderMatchItem match={ladderMatches[10]} home={'Gospodaż (2)'} away={'Gość (2)'} title={'1/4 finału #3'} />
            </Segment.Group>
          </Grid.Column>

          <Grid.Column width={4} >
            <Grid columns={2} centered>
              <Grid.Column width={12}>
                <LadderMatchItem match={ladderMatches[15]} home={'Finał Gospodaż'} away={'Finał Gość'} title={'FINAŁ'} />
              </Grid.Column>
              <Grid.Column width={12}>
                <LadderMatchItem match={ladderMatches[14]} home={'#3 Gospodaż'} away={'#3 Gość'} title={'mecz o 3 miejsce'} />
              </Grid.Column>
              <Grid.Column width={12}>
                <Segment.Group >
                  <LadderMatchItem match={ladderMatches[13]} home={'Gospodaż'} away={'Gość'} title={'1/2 finału #2'} />
                  <LadderMatchItem match={ladderMatches[12]} home={'Gospodaż'} away={'Gość'} title={'1/2 finału #1'} />
                </Segment.Group>
              </Grid.Column>
            </Grid>
          </Grid.Column>

          <Grid.Column width={3}>
            <Segment.Group>
              <LadderMatchItem match={ladderMatches[9]} home={'Gospodaż (3)'} away={'Gość (3)'} title={'1/4 finału #2'} />
              <LadderMatchItem match={ladderMatches[11]} home={'Gospodaż (4)'} away={'Gość (4)'} title={'1/4 finału #4'} />
            </Segment.Group>
          </Grid.Column>

          <Grid.Column width={3}>
            <Segment.Group >
              <LadderMatchItem match={ladderMatches[2]} home={'1D'} away={'2C'} title={'1/8 finału #3'} />
              <LadderMatchItem match={ladderMatches[3]} home={'1B'} away={'2A'} title={'1/8 finału #4'} />
            </Segment.Group>
            <Segment.Group>
              <LadderMatchItem match={ladderMatches[6]} home={'1F'} away={'2E'} title={'1/8 finału #7'} />
              <LadderMatchItem match={ladderMatches[7]} home={'1H'} away={'2G'} title={'1/8 finału #8'} />
            </Segment.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid columns={3} verticalAlign='middle' centered>
        <Grid.Row only='tablet'>
          <Grid.Column width={4}>
            <Segment.Group >
              <LadderMatchItem match={ladderMatches[0]} home={'A1'} away={'2B'} title={'1/8 finału #1'} />
              <LadderMatchItem match={ladderMatches[1]} home={'1C'} away={'2D'} title={'1/8 finału #2'} />
            </Segment.Group>
            <Segment.Group>
              <LadderMatchItem match={ladderMatches[4]} home={'1E'} away={'2F'} title={'1/8 finału #5'} />
              <LadderMatchItem match={ladderMatches[5]} home={'1G'} away={'2H'} title={'1/8 finału #6'} />
            </Segment.Group>
            <Segment.Group >
              <LadderMatchItem match={ladderMatches[2]} home={'1D'} away={'2C'} title={'1/8 finału #3'} />
              <LadderMatchItem match={ladderMatches[3]} home={'1B'} away={'2A'} title={'1/8 finału #4'} />
            </Segment.Group>
            <Segment.Group>
              <LadderMatchItem match={ladderMatches[6]} home={'1F'} away={'2E'} title={'1/8 finału #7'} />
              <LadderMatchItem match={ladderMatches[7]} home={'1H'} away={'2G'} title={'1/8 finału #8'} />
            </Segment.Group>
          </Grid.Column>
          <Grid.Column width={4} >
            <Segment.Group>
              <LadderMatchItem match={ladderMatches[8]} home={'Gospodaż (1)'} away={'Gość (1)'} title={'1/4 finału #1'} />
              <LadderMatchItem match={ladderMatches[10]} home={'Gospodaż (3)'} away={'Gość (3)'} title={'1/4 finału #3'} />
            </Segment.Group>
            <Segment.Group>
              <LadderMatchItem match={ladderMatches[9]} home={'Gospodaż (2)'} away={'Gość (2)'} title={'1/4 finału #2'} />
              <LadderMatchItem match={ladderMatches[11]} home={'Gospodaż (4)'} away={'Gość (4)'} title={'1/4 finału #4'} />
            </Segment.Group>
          </Grid.Column>
          <Grid.Column width={8} >
            <Grid columns={2} centered >
              <Grid.Column width={16} >
                <Segment.Group horizontal>
                  <LadderMatchItem match={ladderMatches[13]} home={'Gospodaż'} away={'Gość'} title={'1/2 finału #2'} />
                  <LadderMatchItem match={ladderMatches[12]} home={'Gospodaż'} away={'Gość'} title={'1/2 finału #1'} />
                </Segment.Group>
              </Grid.Column>
              <Grid.Column width={9}>
                <LadderMatchItem match={ladderMatches[14]} home={'#3 Gospodaż'} away={'#3 Gość'} title={'mecz o 3 miejsce'} />
              <Grid.Column width={12}>
                <LadderMatchItem match={ladderMatches[15]} home={'Finał Gospodaż'} away={'Finał Gość'} title={'FINAŁ'} />
              </Grid.Column>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid columns={2} verticalAlign='middle' centered>
        <Grid.Row only='mobile'>
          <Grid.Column width={8}>
            <Segment.Group >
              <LadderMatchItem match={ladderMatches[0]} home={'A1'} away={'2B'} title={'1/8 finału #1'} />
              <LadderMatchItem match={ladderMatches[1]} home={'1C'} away={'2D'} title={'1/8 finału #2'} />
            </Segment.Group>
            <Segment.Group >
              <LadderMatchItem match={ladderMatches[2]} home={'1D'} away={'2C'} title={'1/8 finału #3'} />
              <LadderMatchItem match={ladderMatches[3]} home={'1B'} away={'2A'} title={'1/8 finału #4'} />
            </Segment.Group>
            <Segment.Group>
              <LadderMatchItem match={ladderMatches[8]} home={'Gospodaż (1)'} away={'Gość (1)'} title={'1/4 finału #1'} />
              <LadderMatchItem match={ladderMatches[9]} home={'Gospodaż (2)'} away={'Gość (2)'} title={'1/4 finału #2'} />
            </Segment.Group>
            <Segment.Group >
              <LadderMatchItem match={ladderMatches[13]} home={'Gospodaż'} away={'Gość'} title={'1/2 finału #2'} />
              <LadderMatchItem match={ladderMatches[12]} home={'Gospodaż'} away={'Gość'} title={'1/2 finału #1'} />
            </Segment.Group>
          </Grid.Column>
          <Grid.Column width={8} >
            <Segment.Group>
              <LadderMatchItem match={ladderMatches[4]} home={'1E'} away={'2F'} title={'1/8 finału #5'} />
              <LadderMatchItem match={ladderMatches[5]} home={'1G'} away={'2H'} title={'1/8 finału #6'} />
            </Segment.Group>
            <Segment.Group>
              <LadderMatchItem match={ladderMatches[6]} home={'1F'} away={'2E'} title={'1/8 finału #7'} />
              <LadderMatchItem match={ladderMatches[7]} home={'1H'} away={'2G'} title={'1/8 finału #8'} />
            </Segment.Group>
            <Segment.Group>
              <LadderMatchItem match={ladderMatches[10]} home={'Gospodaż (3)'} away={'Gość (3)'} title={'1/4 finału #3'} />
              <LadderMatchItem match={ladderMatches[11]} home={'Gospodaż (4)'} away={'Gość (4)'} title={'1/4 finału #4'} />
            </Segment.Group>
            <LadderMatchItem match={ladderMatches[14]} home={'#3 Gospodaż'} away={'#3 Gość'} title={'mecz o 3 miejsce'} />

            <LadderMatchItem match={ladderMatches[15]} home={'Finał Gospodaż'} away={'Finał Gość'} title={'FINAŁ'} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
})
