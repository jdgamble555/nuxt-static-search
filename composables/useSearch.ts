type BTTFItem = {
    title: string;
    description: string;
    url: string;
};

export const items: BTTFItem[] = [
    {
        title: "The DeLorean Time Machine",
        description: "Explore the iconic DeLorean, the time-traveling car built by Doc Brown.",
        url: "/vehicles/delorean"
    },
    {
        title: "Marty McFly",
        description: "Learn all about the skateboarding teenager who travels through time.",
        url: "/characters/marty"
    },
    {
        title: "Doc Emmett Brown",
        description: "Meet the eccentric inventor behind the time machine.",
        url: "/characters/doc-brown"
    },
    {
        title: "Hill Valley Timeline",
        description: "A deep dive into the changing history of Hill Valley across the trilogy.",
        url: "/timeline/hill-valley"
    },
    {
        title: "Hoverboard Technology",
        description: "Discover the future of personal transportation with hoverboards.",
        url: "/tech/hoverboard"
    },
    {
        title: "Biff Tannen's Antagonism",
        description: "Explore the many timelines where Biff makes life difficult for Marty.",
        url: "/characters/biff"
    },
    {
        title: "Flux Capacitor",
        description: "The core component that makes time travel possible.",
        url: "/tech/flux-capacitor"
    },
    {
        title: "1985 vs. 2015",
        description: "Compare the original 1985 to the future version envisioned in Part II.",
        url: "/timeline/1985-vs-2015"
    },
    {
        title: "Enchantment Under the Sea Dance",
        description: "The pivotal high school dance that almost erased Marty from existence.",
        url: "/events/enchantment-dance"
    },
    {
        title: "Back to the Future Merchandise",
        description: "Browse collectibles, clothes, and posters from the BTTF universe.",
        url: "/shop/merchandise"
    }
];



function fuzzyScore(query: string, text: string): number {
    query = query.replace(/\s+/g, '').toLowerCase();
    text = text.replace(/\s+/g, '').toLowerCase();

    let score = 0;
    let lastIndex = -1;

    for (const char of query) {
        const index = text.indexOf(char, lastIndex + 1);
        if (index === -1) return 0;
        score += 1 / (index - lastIndex);
        lastIndex = index;
    }

    return score;
}

export function useSearch() {
    const query = ref('');
    const results = ref<BTTFItem[]>([]);

    function search() {
        const q = query.value.trim().toLowerCase();
        if (!q) {
            results.value = [];
            return;
        }

        results.value = items
            .map(item => {
                const scoreTitle = fuzzyScore(q, item.title);
                const scoreDesc = fuzzyScore(q, item.description);
                const totalScore = scoreTitle * 2 + scoreDesc;
                return { item, score: totalScore };
            })
            .filter(entry => entry.score > 0)
            .sort((a, b) => b.score - a.score)
            .map(entry => entry.item);
    }

    return {
        query,
        results,
        search
    };
}
