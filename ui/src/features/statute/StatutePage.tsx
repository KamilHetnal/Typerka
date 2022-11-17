import React from 'react'
import { Container, Header, Item, Segment } from 'semantic-ui-react'

export default function StatutePage() {
    return (
        <Container text >
            <Segment.Group>
                <Segment>
                    <Header as={'h2'} content='Zasady gry' />
                </Segment>
                <Segment>
                Gra „Bet in Bed” polega na typowaniu wyników meczy podczas turnieju FIFA World Cup 2022. 
                </Segment>
                <Segment>
                - Zwycięzcy zabawy rozstrzyga tabela po całej grze, wygrywa gracz który zbierze największą ilość punktów przez cały okres turnieju, a trzech najlepszych graczy otrzymuje nagrody.
                </Segment>
                <Segment>
                - Zawodnicy zgłoszeni do rywalizacji typują wynik każdego odbywanego meczu podczas mundialu, a za każdy trafny typ dostają punkty;
                </Segment>
                <Segment>
                - Każdy wynik meczu musi być wysłany przed rozpoczęciem meczu;
                </Segment>
                <Segment>
                - Końcowy wynik w rozgrywce jest sumą wszystkich punktów zdobytych łącznie we wszystkich 64 meczach odbywanych na Mistrzostwach Świata + suma punktów bonusowych                
                </Segment>
            </Segment.Group>
            <Segment.Group>
                <Segment>
                    <Header as='h2' content='Przyznawanie punktów' />
                </Segment>
                <Segment>
                - Za obstawiony mecz gracz może otrzymać 0 , 2 lub 5 punktów;
                </Segment>
                <Segment>
                - Na podstawie prawdziwego wyniku na boiskach mundialowych, oceniamy czy gracz prawidłowo wytypował zwycięzcę meczu. Jeśli tak, otrzymuje za to 2pkt., bez względu na to czy prawidłowo odgadł wynik spotkania:
                </Segment>
                <Segment>
                *przykład 1: Gracz postawił wynik A 1:0 B, lecz mecz zakończył się wynikiem A 3:1 B – gracz otrzymuje 2 punkty, gdyż przewidział że zwycięży drużyna A;
                </Segment>
                <Segment>
                *przykład 2: Gracz postawił wynik A 1:1 B, lecz mecz zakończył się wynikiem A 0:0 B – gracz otrzymuje 2 punkty, gdyż przewidział że w meczu padnie remis;                
                </Segment>
                <Segment>
                - Jeżeli gracz prawidłowo wytypuje dokładny wynik meczu, otrzymuje 5 punktów. 2 punkty za prawidłowo wytypowanego zwycięzcę, oraz dodatkowo 3 punkty za trafiony dokładny wynik;                
                </Segment>
                <Segment>
                - Jeżeli gracz niepoprawnie wytypuje mecz, otrzymuje 0 punktów za ten mecz;
                </Segment>
            </Segment.Group>
            <Segment.Group>
                <Segment>
                <Header as='h2' content='Faza pucharowa' />
                </Segment>
                <Segment>
                - w fazie pucharowej mecze są traktowane całościowo – wliczane są również dogrywki oraz konkurs rzutów karnych. Gracze nie mogą obstawiać remisów. Wygrane rzuty karne traktowane są jako +1 gol dla drużyny zwycięskiej:
                </Segment>
                <Segment>
                *przykład 1: Mecz po 120’ przy wyniku 1:1 wciąż pozostaje nierozstrzygnięty, drużyna A wygrywa w konkursie rzutów karnych. Za typ obstawiający zwycięstwo drużyny A gracz otrzymuje 2 punkty, a za obstawienie wyniku A 2:1 B - dodatkowe 3 punkty;
                </Segment>
                <Segment>
                *przykład 2: Mecz po 120’ przy wyniku 1:1 wciąż pozostaje nierozstrzygnięty, drużyna A wygrywa po dogrywce 3:1. Prawidłowo wytypowany wynik to A 3:1 B ( w zakładach bukmacherskich prawidłowo wytypowanym wynikiem byłoby 1:1)
                </Segment>
            </Segment.Group>
            <Segment.Group>
                <Segment>
                <Header as='h2' content='Punkty BONUSOWE' />
                </Segment>
                <Segment>
                - gracze przed rozpoczęciem pierwszego meczu na MŚ typują końcowego zwycięzcę oraz króla strzelców na turnieju. Za każdy poprawny traf z dwóch bonusowych zakładów gracz otrzymuje po 10 punktów. Gracz może zdobyć bonusowo 0 , 10 lub 20 punktów dodatkowo. 
                </Segment>
            </Segment.Group>
        </Container>
    )
}
