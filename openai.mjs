function fourEfforts(prompt) {
    const systemContent =
            "You are a wise Buddhist teacher. Please give advice related to the Four Efforts.",
        jsonSchema = {
            data: {
                type: "object",
                properties: {
                    "rid unwholesome": {
                        type: "string",
                        description: "a wise way to rid unwholesome qualities",
                    },
                    "prevent unwholesome": {
                        type: "string",
                        description:
                            "a wise way to prevent unwholesome qualities",
                    },
                    "develop wholesome": {
                        type: "string",
                        description:
                            "a wise way to develop wholesome qualities",
                    },
                    "sustain wholesome": {
                        type: "string",
                        description:
                            "a wise way to sustain wholesome qualities",
                    },
                },
                required: [
                    "rid unwholesome",
                    "prevent unwholesome",
                    "develop wholesome",
                    "sustain wholesome",
                ],
                additionalProperties: false,
            },
        };
    return { systemContent, jsonSchema };
}

function threeMarksOfExistence(problem) {
    const categories = {
            Impermanence: {
                problems: [
                    "The problem is rooted in not wanting something good to end, or not realizing that something bad will inevitably end.",
                ],
                solutions: [
                    "The solution is letting go of attachment and aversion to worldly things.",
                    "Focus on how all things good or bad will come to an end.",
                    "Enjoy the moment for what it offers or teaches.",
                ],
            },
            Egolessness: {
                problems: [
                    "The problem is rooted in one's idea that they are a permanent self.",
                    "The problem involves worrying about reputation or a bad self-image.",
                ],
                solutions: [
                    "The solution involves recognizing oneself as a constantly evolving person.",
                    "Though past events and the opinions of others might be painful, we are constantly changing both physically and mentally based on causes and conditions (5 aggregates).",
                    "Loosen attachment to ego and strong sense of self.",
                ],
            },
            Dissatisfaction: {
                problems: [
                    "The problem is rooted in not getting what one wants, or getting what one doesn't want.",
                ],
                solutions: [
                    "The solution involves recognizing one's desires as limiting beliefs that stand in the way of happiness.",
                    "Open your mind.",
                ],
            },
        },
        systemContent =
            "Categorize the problem under one of these three categories: " +
            "Impermanence, Egolessness, Death. Here is a guide of the categories: " +
            JSON.stringify(categories);
    return { systemContent, categories };
}
