// @ts-nocheck
import { error } from '@sveltejs/kit';

interface Ranking  {
    name: string,
    ranking: number,
    points: number
}

interface Competition {
    id: number
    name: string
}

const getCompetition = (id: number): Competition => { return {
    id: 1,
    name: 'Tafeltennis'}
}

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({params}) {
  
    const competition: Competition = await getCompetition(params.slug);

	const rankings: Ranking[] = await[{
        name: 'Piet',
        ranking: 1,
        points: 160
    },
    {
        name: 'Shaar',
        ranking: 2,
        points: 140
    },
    {
        name: 'Else',
        ranking: 3,
        points: 130
    },
    {
        name: 'Mohammed',
        ranking: 4,
        points: 95
    }]



	if (rankings) {
        const data = {
         competitionName: competition.name,
         rankins: rankings 
        };

        return data;
	}


	throw error(404, 'Not found');
}