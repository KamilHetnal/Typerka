import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { useStore } from '../../../app/stores/store'
import ChampionshipListItem from './ChampionshipListItem'

export default observer(function ChampionshipDashboard() {
    const{championshipStore} = useStore()
    const {loadChampionships} = championshipStore

    useEffect(() => {
        loadChampionships()
      }, [loadChampionships])
  return (
    <>
        <ChampionshipListItem />
    </>
  )
})
