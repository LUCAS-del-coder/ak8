'use client'

const gameProviders = [
  { id: 'jili', name: 'Jili', logo: 'JILI' },
  { id: 'pragmatic', name: 'Pragmatic Play', logo: 'PRAGMATIC\nPLAY' },
  { id: 'epicwin', name: 'EpicWin', logo: 'EPIC\nWIN' },
  { id: 'jdb', name: 'JDB', logo: 'JDB' },
  { id: 'vpower', name: 'V-Power', logo: 'V-POWER' },
  { id: 'funkygames', name: 'Funky Games', logo: 'FUNKY\nGAMES' },
  { id: 'dragoonsoft', name: 'Dragoon Soft', logo: 'DRAGOON\nSOFT' },
  { id: 'worldmatch', name: 'World Match', logo: 'WM' },
  { id: 'live22', name: 'Live22', logo: 'LIVE22' },
  { id: 'marioclub', name: 'MarioClub', logo: 'MARIO\nCLUB' },
  { id: 'bng', name: 'BNG', logo: 'BNG' },
  { id: 'uuslots', name: 'UU Slot', logo: 'UU\nSLOTS' },
  { id: 'habanero', name: 'Habanero', logo: 'HABANERO' },
  { id: 'gameplay', name: 'Gameplay', logo: 'GAMEPLAY' },
  { id: 'dreamtech', name: 'Dream Tech', logo: 'DREAM\nTECH' },
  { id: 'cq9', name: 'CQ9', logo: 'CQ9' },
  { id: 'playngo', name: 'Play N Go', logo: 'PLAY\nN GO' },
  { id: 'pgsoft', name: 'PG Soft', logo: 'PG SOFT' },
  { id: 'microgaming', name: 'Microgaming', logo: 'MICRO\nGAMING' },
  { id: 'kingmaker', name: 'King Maker', logo: 'KING\nMAKER' },
]

export default function GamesSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8" id="games">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gradient mb-12">
          熱門遊戲供應商
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {gameProviders.map((provider) => (
            <article
              key={provider.id}
              className="game-card group"
              role="button"
              tabIndex={0}
              onClick={() => console.log(`Opening ${provider.name}`)}
            >
              <div className="relative h-48 bg-gradient-to-br from-primary-red to-primary-dark-red flex items-center justify-center overflow-hidden shimmer">
                <div className="text-white text-center font-bold text-xl sm:text-2xl z-10 whitespace-pre-line px-4">
                  {provider.logo}
                </div>
              </div>
              <div className="bg-background-medium-gray p-4 text-center">
                <h3 className="font-bold text-lg">{provider.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
