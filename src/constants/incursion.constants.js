const INCURSION_CONSTANTS = {
        rank: [
            {rank: 1, min: 0, max: 14},
            {rank: 2, min: 15, max: 29},
            {rank: 3, min: 30, max: 39},
            {rank: 4, min: 40, max: 49},
            {rank: 5, min: 50, max: 59},
            {rank: 6, min: 60, max: 69},
            {rank: 7, min: 70, max: 84},
        ],
        rooms: {
            non_upgradeable: {
                antechamber: {
                    id: 'antechamber', name: 'Antechamber', tier: 0
                },
                banquet_hall: {
                    id: 'banquet_hall', name: 'Banquet Hall', tier: 0
                },
                apex_of_atzoatl: {
                    id: 'apex_of_atzoatl', name: 'Apex of Atzoatl', tier: 0
                },
                cellar: {
                    id: 'cellar', name: 'Cellar', tier: 0
                },
                chasm: {
                    id: 'chasm', name: 'Chasm', tier: 0
                },
                cloister: {
                    id: 'cloister', name: 'Cloister', tier: 0
                },
                entrance: {
                    id: 'entrance', name: 'Entrance', tier: 0
                },
                halls: {
                    id: 'halls', name: 'Halls', tier: 0
                },
                passageways: {
                    id: 'passageways', name: 'Passageways', tier: 0
                },
                pits: {
                    id: 'pits', name: 'Pits', tier: 0
                },
                tombs: {
                    id: 'tombs', name: 'Tombs', tier: 0
                },
                tunnels: {
                    id: 'tunnels', name: 'Tunnels', tier: 0
                },
            },
            upgradeable: {
                chamber_of_iron: [
                    {id: 'armourers_workshop', name: 'Armourer\'s Workshop', tier: 1},
                    {id: 'armoury', name: 'Armoury', tier: 2},
                    {id: 'chamber_of_iron', name: 'Chamber of Iron', tier: 3},
                ],
                crucible_of_flame:
                    [
                        {id: 'flame_workshop', name: 'Flame Workshop', tier: 1},
                        {id: 'omnitect_forge', name: 'Omnitect Forge', tier: 2},
                        {id: 'crucible_of_flame', name: 'Crucible of Flame', tier: 3},
                    ],
                conduit_of_lightning:
                    [
                        {id: 'lightning_workshop', name: 'Lightning Workshop', tier: 1},
                        {id: 'omnitect_reactor_plant', name: 'Omnitect Reactor Plant', tier: 2},
                        {id: 'conduit_of_lightning', name: 'Conduit of Lightning', tier: 3},
                    ],
                hybridisation_chamber:
                    [
                        {id: 'hatchery', name: 'Hatchery', tier: 1},
                        {id: 'automaton_lab', name: 'Automaton Lab', tier: 2},
                        {id: 'hybridisation_chamber', name: 'Hybridisation Chamber', tier: 3},
                    ],
                house_of_the_others:
                    [
                        {id: 'splinter_research_lab', name: 'Splinter Research Lab', tier: 1},
                        {id: 'breach_containment_chamber', name: 'Breach Containment Chamber', tier: 2},
                        {id: 'house_of_the_others', name: 'House of the Others', tier: 3},
                    ],
                hall_of_war:
                    [
                        {id: 'guardhouse', name: 'Guardhouse', tier: 1},
                        {id: 'barracks', name: 'Barracks', tier: 2},
                        {id: 'hall_of_war', name: 'Hall of War', tier: 3},
                    ],
                atlas_of_worlds:
                    [
                        {id: 'surveyors_study', name: 'Surveyor\'s Study', tier: 1},
                        {id: 'office_of_cartography', name: 'Office of Cartography', tier: 2},
                        {id: 'atlas_of_worlds', name: 'Atlas of Worlds', tier: 3},
                    ],
                museum_of_artifacts:
                    [
                        {id: 'storage_room', name: 'Storage Room', tier: 1},
                        {id: 'warehouses', name: 'Warehouses', tier: 2},
                        {id: 'museum_of_artifacts', name: 'Museum of Artifacts', tier: 3},
                    ],
                locus_of_corruption:
                    [
                        {id: 'corruption_chamber', name: 'Corruption Chamber', tier: 1},
                        {id: 'catalyst_of_corruption', name: 'Catalyst of Corruption', tier: 2},
                        {id: 'locus_of_corruption', name: 'Locus of Corruption', tier: 3},
                    ],
                wealth_of_the_vaal:
                    [
                        {id: 'vault', name: 'Vault', tier: 1},
                        {id: 'treasury', name: 'Treasury', tier: 2},
                        {id: 'wealth_of_the_vaal', name: 'Wealth of the Vaal', tier: 3},
                    ],
                temple_nexus:
                    [
                        {id: 'shrine_of_empowerment', name: 'Shrine of Empowerment', tier: 1},
                        {id: 'sanctum_of_unity', name: 'Sanctum of Unity', tier: 2},
                        {id: 'temple_nexus', name: 'Temple Nexus', tier: 3},
                    ],
                shrine_of_unmaking:
                    [
                        {id: 'explosives_room', name: 'Explosives Room', tier: 1},
                        {id: 'demolition_lab', name: 'Demolition Lab', tier: 2},
                        {id: 'shrine_of_unmaking', name: 'Shrine of Unmaking', tier: 3},
                    ],
                doryanis_institute:
                    [
                        {id: 'gemcutters_workshop', name: 'Gemcutter\'s Workshop', tier: 1},
                        {id: 'department_of_thaumaturgy', name: 'Department of Thaumaturgy', tier: 2},
                        {id: 'doryanis_institute', name: 'Doryani\'s Institute', tier: 3},
                    ],
                sanctum_of_immortality:
                    [
                        {id: 'pools_of_restoration', name: 'Pools of Restoration', tier: 1},
                        {id: 'sanctum_of_vitality', name: 'Sanctum of Vitality', tier: 2},
                        {id: 'sanctum_of_immortality', name: 'Sanctum of Immortality', tier: 3},
                    ],
                toxic_grove:
                    [
                        {id: 'poison_garden', name: 'Poison Garden', tier: 1},
                        {id: 'cultivar_chamber', name: 'Cultivar Chamber', tier: 2},
                        {id: 'toxic_grove', name: 'Toxic Grove', tier: 3},
                    ],
                throne_of_atziri:
                    [
                        {id: 'royal_meeting_room', name: 'Royal Meeting Room', tier: 1},
                        {id: 'hall_of_lords', name: 'Hall of Lords', tier: 2},
                        {id: 'throne_of_atziri', name: 'Throne of Atziri', tier: 3},
                    ],
                apex_of_ascension:
                    [
                        {id: 'sacrificial_chamber', name: 'Sacrificial Chamber', tier: 1},
                        {id: 'hall_of_offerings', name: 'Hall of Offerings', tier: 2},
                        {id: 'apex_of_ascension', name: 'Apex of Ascension', tier: 3},
                    ],
                storm_of_corruption:
                    [
                        {id: 'tempest_generator', name: 'Tempest Generator', tier: 1},
                        {id: 'hurricane_engine', name: 'Hurricane Engine', tier: 2},
                        {id: 'storm_of_corruption', name: 'Storm of Corruption', tier: 3},
                    ],
                court_of_sealed_death:
                    [
                        {id: 'strongbox_chamber', name: 'Strongbox Chamber', tier: 1},
                        {id: 'hall_of_locks', name: 'Hall of Locks', tier: 2},
                        {id: 'court_of_sealed_death', name: 'Court of Sealed Death', tier: 3},
                    ],
                sadists_den:
                    [
                        {id: 'torment_cells', name: 'Torment Cells', tier: 1},
                        {id: 'torture_cages', name: 'Torture Cages', tier: 2},
                        {id: 'sadists_den', name: 'Sadist\'s Den', tier: 3},
                    ],
                defense_research_lab:
                    [
                        {id: 'trap_workshop', name: 'Trap Workshop', tier: 1},
                        {id: 'temple_defense_workshop', name: 'Temple Defense Workshop', tier: 2},
                        {id: 'defense_research_lab', name: 'Defense Research Lab', tier: 3},
                    ],
                glittering_halls:
                    [
                        {id: 'jewellers_workshop', name: 'Jeweller\'s Workshop', tier: 1},
                        {id: 'jewellery_forge', name: 'Jewellery Forge', tier: 2},
                        {id: 'glittering_halls', name: 'Glittering Halls', tier: 3},
                    ],
                hall_of_champions:
                    [
                        {id: 'sparring_room', name: 'Sparring Room', tier: 1},
                        {id: 'arena_of_valour', name: 'Arena of Valour', tier: 2},
                        {id: 'hall_of_champions', name: 'Hall of Champions', tier: 3},
                    ],
                factory:
                    [
                        {id: 'workshop', name: 'Workshop', tier: 1},
                        {id: 'engineering_department', name: 'Engineering Department', tier: 2},
                        {id: 'factory', name: 'Factory', tier: 3},
                    ],
            }
            ,
        },
    }
;

export default INCURSION_CONSTANTS;
