const questions= [
    "Ask about occupation",
    "Get general information about life there. Satisfied/Unsatisfied/Neutral",
    "Idea about population. Number of members in a family",
    "Try to get an idea about the male/female ratio in each family",
    "Get a status of society, are they male dominated or if females have equal say in matters",
    "Hopes,dreams,aspiration of people there. Do they have any long term goals for themselves and their childrens",
    "Do the children like their cultures or do they wish to get out of it, do they wish to become like urban childrens or follow footsteps of their ancestors and preserve their cultures",
    "Ask of their cultures, their grand festivals (EX: EID, Puja etc)",
    "If possible get ideas about the dominating religion there and how pious or dedicated the people are towards it",
    "Get an idea of the per head income of the people there, also if it's enough for their day to day lives",
    "Population, amount of people living there. Ask around, try to get an accurate figure",
    "Get a status of migration, do people move from there to urban areas like Dhaka or Sylhet main town for livlihood. If so, then how many",
    "Get an idea of housing, living in own house or rented/landless",
    "Maritial Status. How many married/unmarried/widowed in the entire village. Does maritial status effect social status",
    "Educational status, do they have formal education if so, then upto which levels",
    "Is Electricity available in the village? No need to ask this, we'll figure it on our own",
    "What sort of fuel being used for cooking, gas,wood etc",
    "Status of medical facilities, enough/not enough"
];

const DOM= document.getElementById("mainContent");

for(let i=0;i<18;i++){
    DOM.insertAdjacentHTML("beforeend",`<div class="card border-primary my-3">
          <div class="card-header">${questions[i]}<span class="badge badge-primary float-right">${i+1}</span></div>
          <div class="card-body">
            <p class="card-text pb-4"></p>
          </div>
    </div>`);
}
