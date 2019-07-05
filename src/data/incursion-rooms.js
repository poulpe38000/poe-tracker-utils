const INCURSION_ROOMS = {
    antechamber: [{id: 'antechamber', name: 'Antechamber', tier: 0, mods: [], notable: []}],
    banquet_hall: [{id: 'banquet_hall', name: 'Banquet Hall', tier: 0, mods: [], notable: []}],
    apex_of_atzoatl: [{id: 'apex_of_atzoatl', name: 'Apex of Atzoatl', tier: 0, mods: [], notable: []}],
    cellar: [{id: 'cellar', name: 'Cellar', tier: 0, mods: [], notable: []}],
    chasm: [{id: 'chasm', name: 'Chasm', tier: 0, mods: [], notable: []}],
    cloister: [{id: 'cloister', name: 'Cloister', tier: 0, mods: [], notable: []}],
    entrance: [{id: 'entrance', name: 'Entrance', tier: 0, mods: [], notable: []}],
    halls: [{id: 'halls', name: 'Halls', tier: 0, mods: [], notable: []}],
    passageways: [{id: 'passageways', name: 'Passageways', tier: 0, mods: [], notable: []}],
    pits: [{id: 'pits', name: 'Pits', tier: 0, mods: [], notable: []}],
    tombs: [{id: 'tombs', name: 'Tombs', tier: 0, mods: [], notable: []}],
    tunnels: [{id: 'tunnels', name: 'Tunnels', tier: 0, mods: [], notable: []}],
    chamber_of_iron: [
        {
            id: 'armourers_workshop', name: 'Armourer\'s Workshop', tier: 1,
            mods: ['10% more Monster Life'],
            notable: ['Contains chests full of armour'],
        },
        {
            id: 'armoury', name: 'Armoury', tier: 2,
            mods: ['20% more Monster Life'],
            notable: ['Contains chests full of armour'],
        },
        {
            id: 'chamber_of_iron', name: 'Chamber of Iron', tier: 3,
            mods: ['30% more Monster Life'],
            notable: ['Contains chests full of armour', 'Crafting recipe: Animate Guardian'],
        },
    ],
    crucible_of_flame: [
        {
            id: 'flame_workshop', name: 'Flame Workshop', tier: 1,
            mods: ['Augments the Omnitect with fire'],
            notable: [],
        },
        {
            id: 'omnitect_forge', name: 'Omnitect Forge', tier: 2,
            mods: ['Augments the Omnitect with fire'],
            notable: [],
        },
        {
            id: 'crucible_of_flame', name: 'Crucible of Flame', tier: 3,
            mods: ['Augments the Omnitect with fire'],
            notable: ['Contains a magic item with a Puhuarte Incursion mod or Story of the Vaal'],
        },
    ],
    conduit_of_lightning: [
        {
            id: 'lightning_workshop', name: 'Lightning Workshop', tier: 1,
            mods: ['Augments the Omnitect with lightning'],
            notable: [],
        },
        {
            id: 'omnitect_reactor_plant', name: 'Omnitect Reactor Plant', tier: 2,
            mods: ['Augments the Omnitect with lightning'],
            notable: [],
        },
        {
            id: 'conduit_of_lightning', name: 'Conduit of Lightning', tier: 3,
            mods: ['Augments the Omnitect with lightning'],
            notable: ['Contains a magic item with a Xopec Incursion mod or Dance of the Offered'],
        },
    ],
    hybridisation_chamber: [
        {
            id: 'hatchery', name: 'Hatchery', tier: 1,
            mods: ['Augments the Omnitect with minions'],
            notable: [],
        },
        {
            id: 'automaton_lab', name: 'Automaton Lab', tier: 2,
            mods: ['Augments the Omnitect with minions'],
            notable: [],
        },
        {
            id: 'hybridisation_chamber', name: 'Hybridisation Chamber', tier: 3,
            mods: ['Augments the Omnitect with minions'],
            notable: ['Contains a magic item with a Citaqualotl Incursion mod or Coward\'s Chains', 'Crafting recipe: Minions Rank 3'],
        },
    ],
    house_of_the_others: [
        {
            id: 'splinter_research_lab', name: 'Splinter Research Lab', tier: 1,
            mods: [],
            notable: ['Contains Breach Splinters'],
        },
        {
            id: 'breach_containment_chamber', name: 'Breach Containment Chamber', tier: 2,
            mods: [],
            notable: ['Contains a Breach'],
        },
        {
            id: 'house_of_the_others', name: 'House of the Others', tier: 3,
            mods: [],
            notable: ['Contains three Breaches'],
        },
    ],
    hall_of_war: [
        {
            id: 'guardhouse', name: 'Guardhouse', tier: 1,
            mods: ['+10% Monster pack size'],
            notable: [],
        },
        {
            id: 'barracks', name: 'Barracks', tier: 2,
            mods: ['+20% Monster pack size'],
            notable: [],
        },
        {
            id: 'hall_of_war', name: 'Hall of War', tier: 3,
            mods: ['+30% Monster pack size'],
            notable: [],
        },
    ],
    atlas_of_worlds: [
        {
            id: 'surveyors_study', name: 'Surveyor\'s Study', tier: 1,
            mods: [],
            notable: ['Contains chests full of maps'],
        },
        {
            id: 'office_of_cartography', name: 'Office of Cartography', tier: 2,
            mods: [],
            notable: ['Contains chests full of maps'],
        },
        {
            id: 'atlas_of_worlds', name: 'Atlas of Worlds', tier: 3,
            mods: [],
            notable: ['Contains chests full of maps'],
        },
    ],
    museum_of_artifacts: [
        {
            id: 'storage_room', name: 'Storage Room', tier: 1,
            mods: [],
            notable: ['Contains chests full of items'],
        },
        {
            id: 'warehouses', name: 'Warehouses', tier: 2,
            mods: [],
            notable: ['Contains chests full of items'],
        },
        {
            id: 'museum_of_artifacts', name: 'Museum of Artifacts', tier: 3,
            mods: [],
            notable: ['Contains chests full of items'],
        },
    ],
    locus_of_corruption: [
        {
            id: 'corruption_chamber', name: 'Corruption Chamber', tier: 1,
            mods: ['-6% maximum Player Resistances'],
            notable: [],
        },
        {
            id: 'catalyst_of_corruption', name: 'Catalyst of Corruption', tier: 2,
            mods: ['-8% maximum Player Resistances'],
            notable: [],
        },
        {
            id: 'locus_of_corruption', name: 'Locus of Corruption', tier: 3,
            mods: ['-10% maximum Player Resistances'],
            notable: ['Contains an Altar of Corruption', 'Crafting recipe: Reduced Damage over Time'],
        },
    ],
    wealth_of_the_vaal: [
        {
            id: 'vault', name: 'Vault', tier: 1,
            mods: [],
            notable: ['Contains chests full of currency items'],
        },
        {
            id: 'treasury', name: 'Treasury', tier: 2,
            mods: [],
            notable: ['Contains chests full of currency items'],
        },
        {
            id: 'wealth_of_the_vaal', name: 'Wealth of the Vaal', tier: 3,
            mods: [],
            notable: ['Contains chests full of currency items'],
        },
    ],
    temple_nexus: [
        {
            id: 'shrine_of_empowerment', name: 'Shrine of Empowerment', tier: 1,
            mods: ['10% increased Monster Cast Speed', '10% increased Monster Attack Speed'],
            notable: [],
        },
        {
            id: 'sanctum_of_unity', name: 'Sanctum of Unity', tier: 2,
            mods: ['15% increased Monster Cast Speed', '15% increased Monster Attack Speed'],
            notable: [],
        },
        {
            id: 'temple_nexus', name: 'Temple Nexus', tier: 3,
            mods: ['20% increased Monster Cast Speed', '20% increased Monster Attack Speed'],
            notable: [],
        },
    ],
    shrine_of_unmaking: [
        {
            id: 'explosives_room', name: 'Explosives Room', tier: 1,
            mods: [],
            notable: ['Contains 1 Explosive Charge'],
        },
        {
            id: 'demolition_lab', name: 'Demolition Lab', tier: 2,
            mods: [],
            notable: ['Contains 2 Explosive Charges'],
        },
        {
            id: 'shrine_of_unmaking', name: 'Shrine of Unmaking', tier: 3,
            mods: [],
            notable: ['Contains 3 Explosive Charges'],
        },
    ],
    doryanis_institute: [
        {
            id: 'gemcutters_workshop', name: 'Gemcutter\'s Workshop', tier: 1,
            mods: [],
            notable: ['Contains chests full of gems'],
        },
        {
            id: 'department_of_thaumaturgy', name: 'Department of Thaumaturgy', tier: 2,
            mods: [],
            notable: ['Contains chests full of gems'],
        },
        {
            id: 'doryanis_institute', name: 'Doryani\'s Institute', tier: 3,
            mods: [],
            notable: ['Contains chests full of gems', 'Contains Lapidary Lens (Double-corrupts a gem)'],
        },
    ],
    sanctum_of_immortality: [
        {
            id: 'pools_of_restoration', name: 'Pools of Restoration', tier: 1,
            mods: ['Non-Unique Monsters in this Area Regenerate 4% of Maximum Life per second'],
            notable: [],
        },
        {
            id: 'sanctum_of_vitality', name: 'Sanctum of Vitality', tier: 2,
            mods: ['Non-Unique Monsters in this Area Regenerate 6% of Maximum Life per second'],
            notable: [],
        },
        {
            id: 'sanctum_of_immortality', name: 'Sanctum of Immortality', tier: 3,
            mods: ['Non-Unique Monsters in this Area Regenerate 8% of Maximum Life per second'],
            notable: ['Contains a magic item with a Guatelitzi Incursion mod or Mask of the Spirit Drinker', 'Crafting recipe: Leech Rank 2'],
        },
    ],
    toxic_grove: [
        {
            id: 'poison_garden', name: 'Poison Garden', tier: 1,
            mods: ['Area is Overgrown with Caustic Plants'],
            notable: [],
        },
        {
            id: 'cultivar_chamber', name: 'Cultivar Chamber', tier: 2,
            mods: ['Area is Overgrown with Caustic Plants'],
            notable: [],
        },
        {
            id: 'toxic_grove', name: 'Toxic Grove', tier: 3,
            mods: ['Area is Overgrown with Caustic Plants'],
            notable: ['Contains a magic item with a Tacati Incursion mod or Apep\'s Slumber', 'Crafting recipe: Chaos Damage Rank 3'],
        },
    ],
    throne_of_atziri: [
        {
            id: 'royal_meeting_room', name: 'Royal Meeting Room', tier: 1,
            mods: ['10% increased Monster Cast Speed', '10% increased Monster Attack Speed'],
            notable: [],
        },
        {
            id: 'hall_of_lords', name: 'Hall of Lords', tier: 2,
            mods: ['15% increased Monster Cast Speed', '15% increased Monster Attack Speed'],
            notable: [],
        },
        {
            id: 'throne_of_atziri', name: 'Throne of Atziri', tier: 3,
            mods: ['20% increased Monster Cast Speed', '20% increased Monster Attack Speed'],
            notable: ['Contains Atziri, Queen of the Vaal'],
        },
    ],
    apex_of_ascension: [
        {
            id: 'sacrificial_chamber', name: 'Sacrificial Chamber', tier: 1,
            mods: [],
            notable: ['Allows you to sacrifice a unique item'],
        },
        {
            id: 'hall_of_offerings', name: 'Hall of Offerings', tier: 2,
            mods: [],
            notable: ['Allows you to sacrifice a unique item'],
        },
        {
            id: 'apex_of_ascension', name: 'Apex of Ascension', tier: 3,
            mods: [],
            notable: ['Allows you to sacrifice a unique item'],
        },
    ],
    storm_of_corruption: [
        {
            id: 'tempest_generator', name: 'Tempest Generator', tier: 1,
            mods: ['Adds certain Tempests to the Temple'],
            notable: [],
        },
        {
            id: 'hurricane_engine', name: 'Hurricane Engine', tier: 2,
            mods: ['Adds certain Tempests to the Temple'],
            notable: [],
        },
        {
            id: 'storm_of_corruption', name: 'Storm of Corruption', tier: 3,
            mods: ['Adds Corrupting or Radiating Tempests to the Temple'],
            notable: ['Contains a magic item with a Topotante Incursion mod'],
        },
    ],
    court_of_sealed_death: [
        {
            id: 'strongbox_chamber', name: 'Strongbox Chamber', tier: 1,
            mods: [],
            notable: ['Contains 2 Strongboxes'],
        },
        {
            id: 'hall_of_locks', name: 'Hall of Locks', tier: 2,
            mods: [],
            notable: ['Contains 4 Strongboxes'],
        },
        {
            id: 'court_of_sealed_death', name: 'Court of Sealed Death', tier: 3,
            mods: [],
            notable: ['Contains 6 Strongboxes'],
        },
    ],
    sadists_den: [
        {
            id: 'torment_cells', name: 'Torment Cells', tier: 1,
            mods: [],
            notable: ['Contains 3 Tormented Spirits'],
        },
        {
            id: 'torture_cages', name: 'Torture Cages', tier: 2,
            mods: [],
            notable: ['Contains 5 Tormented Spirits'],
        },
        {
            id: 'sadists_den', name: 'Sadist\'s Den', tier: 3,
            mods: [],
            notable: ['Contains 7 Tormented Spirits'],
        },
    ],
    defense_research_lab: [
        {
            id: 'trap_workshop', name: 'Trap Workshop', tier: 1,
            mods: ['Adds Labyrinth Traps to the Temple'],
            notable: [],
        },
        {
            id: 'temple_defense_workshop', name: 'Temple Defense Workshop', tier: 2,
            mods: ['Adds Labyrinth Traps to the Temple'],
            notable: [],
        },
        {
            id: 'defense_research_lab', name: 'Defense Research Lab', tier: 3,
            mods: ['Adds Labyrinth Traps to the Temple'],
            notable: ['Contains a magic item with a Matatl Incursion mod or Architect\'s Hand', 'Crafting recipe: Traps and Mines Rank 2'],
        },
    ],
    glittering_halls: [
        {
            id: 'jewellers_workshop', name: 'Jeweller\'s Workshop', tier: 1,
            mods: [],
            notable: ['Contains chests full of jewellery'],
        },
        {
            id: 'jewellery_forge', name: 'Jewellery Forge', tier: 2,
            mods: [],
            notable: ['Contains chests full of jewellery'],
        },
        {
            id: 'glittering_halls', name: 'Glittering Halls', tier: 3,
            mods: [],
            notable: ['Contains chests full of jewellery'],
        },
    ],
    hall_of_champions: [
        {
            id: 'sparring_room', name: 'Sparring Room', tier: 1,
            mods: ['10% increased Monster Damage'],
            notable: [],
        },
        {
            id: 'arena_of_valour', name: 'Arena of Valour', tier: 2,
            mods: ['15% increased Monster Damage'],
            notable: ['Contains chests full of weapons'],
        },
        {
            id: 'hall_of_champions', name: 'Hall of Champions', tier: 3,
            mods: ['20% increased Monster Damage'],
            notable: ['Contains chests full of weapons', 'Crafting recipe: Accuracy Rank 3'],
        },
    ],
    factory: [
        {
            id: 'workshop', name: 'Workshop', tier: 1,
            mods: [
                '5% increased Quantity of Items found in this Area',
                'Unique Boss has 15% increased Life',
                'Adds Vaal-infused Totems to the Temple',
                'The Omnitect is assisted by Omnitect\'s Guardians',
            ],
            notable: ['Contains chests full of weapons'],
        },
        {
            id: 'engineering_department', name: 'Engineering Department', tier: 2,
            mods: [
                '10% increased Quantity of Items found in this Area',
                'Unique Boss has 25% increased Life',
                'Adds Vaal-infused Totems to the Temple',
                'The Omnitect is assisted by Omnitect\'s Guardians',
            ],
            notable: [],
        },
        {
            id: 'factory', name: 'Factory', tier: 3,
            mods: [
                '15% increased Quantity of Items found in this Area',
                'Unique Boss has 35% increased Life',
                'Adds Vaal-infused Totems to the Temple',
                'The Omnitect is assisted by Omnitect\'s Guardians',
            ],
            notable: ['Crafting recipe: Criticals Rank 3'],
        },
    ],
};

export default INCURSION_ROOMS;
