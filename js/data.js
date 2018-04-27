var data = {
    title: 'The Bank Robbery',
    description: 'You are in a bank. Sirens go off (It\'s a robbery.).',
    question: 'What do you do?',
    choices: [
        {
            answer: 'Run like a baby',
            description: 'You run like a baby but the cops find you, convict you of the robbery, and you go to jail for life.',
            question: 'Do you live your life in jail or try to escape?',
            choices: [
                {
                    answer: 'Prison for life',
                    description: 'You live out your life in prison until you finally die of starvation.',
                },
                {
                    answer: 'Try to escape',
                    description: 'You manage to escape & live a good life.'
                }
            ]
        },
        {
            answer: 'Try to stop the robber',
            description: 'While you\'re trying to stop him, the robber gets mad & points a gun at you.',
            question: 'Do you punch him in the face or distract him until the police come?',
            choices: [
                {
                    answer: 'Punch him',
                    description: 'You punch him in the face. It annoys him so he shoots you & you die.',
                },
                {
                    answer: 'Distract him',
                    description: 'You distract him until the police finally show up, arrest him, & put hiim in jail. You get rich & famous for stopping him.'
                }
            ]
        }
    ]
}