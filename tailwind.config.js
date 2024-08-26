module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                primary: '#7C3AED',
                'primary-400': '#894eef',
                'primary-300': '#9661f1',
                coal: '#232323',
                gray: '#4A4A4A',
            },
            backgroundImage: {
                // 'main-gradient': 'linear-gradient(135deg, white 10%,  #f2ebfd 50%, #be9df6 70%, #894eef 100%)',
                'main-gradient': 'linear-gradient(135deg, white 40%,  #be9df6 100%)',
                'divider-gradient': 'linear-gradient(180deg, #fafafa 33%,  #f2ebfd 67%, #fafafa 100%)',
            },
        },
    },
    plugins: [],
};
// #7C3AED
// #894eef
// #9661f1
// #a375f2
// #b089f4
// #be9df6
// #cbb0f8
// #d8c4fa
// #e5d8fb
// #f2ebfd
