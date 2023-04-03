const FRIENDS_LIST = [
    { src: './img.png', title: '나', id: 'duswl339'},
    { src: './img.png', title: '이민서', id: 'minseo' },
    { src: './img.png', title: '임수진', id: 'suzin' },
    { src: './img.png', title: '문채원', id: 'mchwon' },
    { src: './img.png', title: '이재현', id: 'jaehyon' },
    { src: './img.png', title: '손진혁', id: 'jinhyuk' },
    { src: './img.png', title: '박소은', id: 'soeun' },
    { src: './img.png', title: '전주현', id: 'juhyun' },
    { src: './img.png', title: '유정협', id: 'junghyeop' },
]

const DETAIL_SCHEDULE = [
    {
        id: 0,
        color: '#FFCECE',
        content: '오랜만에 데이트',
        title: "벚꽃축제",
        timeType: 'part',
        timeStampS: '9:00am',
        timeStampE: '2:00pm',
        place: '성호관',
    },
    {
        id: 1,
        color: '#9351FF',
        title: "스터디",
        content: '코딩테스트 스터디 with 수진 정협',
        timeType: 'part',
        timeStampS: '3:00pm',
        timeStampE: '5:00pm',
        place: '성호관',
    },
    {
        id: 2,
        color: '#51FF96',
        title: "공강",
        content: '',
        timeType: 'full',
        timeStampS: '',
        timeStampE: '',
        place: '',
    },
]

const COLOR_LIST = [
    { color: '#FFA6A6', name: '데이트'},
    { color: '#7367FF', name: '캡스톤디자인'},
    { color: '#1400FF', name: '빅데이터응용보안'},
]

export {FRIENDS_LIST, DETAIL_SCHEDULE, COLOR_LIST};
