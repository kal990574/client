const FRIENDS_LIST = [
    { src: '/img.png', title: '나', id: 'duswl339'},
    { src: '/img.png', title: '이민서', id: 'minseo' },
    { src: '/img.png', title: '임수진', id: 'suzin' },
    { src: '/img.png', title: '문채원', id: 'mchwon' },
    { src: '/img.png', title: '이재현', id: 'jaehyon' },
    { src: '/img.png', title: '손진혁', id: 'jinhyuk' },
    { src: '/img.png', title: '박소은', id: 'soeun' },
    { src: '/img.png', title: '전주현', id: 'juhyun' },
    { src: '/img.png', title: '유정협', id: 'junghyeop' },
    { src: '/img.png', title: '유정협', id: 'junghyeop' },
    { src: '/img.png', title: '유정협', id: 'junghyeop' },
    { src: '/img.png', title: '유정협', id: 'junghyeop' },
    { src: '/img.png', title: '유정협', id: 'junghyeop' },
    { src: '/img.png', title: '유정협', id: 'junghyeop' },
    { src: '/img.png', title: '유정협', id: 'junghyeop' },

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

const SCOPE_DISCLOSURE = [
    { id: 0, title: '나만보기' },
    { id: 1, title: '전체공개' },
    { id: 2, title: '친구공개' },
]

const DIARY_DUMMY = [
    {date: '2023-05-28', content: '나는 배가 너무 고파용', icon: 0, picture: '', scope: 0  },
    {date: '2023-05-29', content: '나는 배가 너무 고파용', icon: 2, picture: '', scope: 2  },
    {date: '2023-05-30', content: '나는 배가 너무 고파용', icon: 3, picture: '', scope: 1  },
    {date: '2023-05-25', content: '나는 배가 너무 고파용', icon: 6, picture: '', scope: 2  },
    {date: '2023-05-24', content: '나는 배가 너무 고파용', icon: 7, picture: '', scope: 1  },
    {date: '2023-05-01', content: '나는 배가 너무 고파용', icon: 2, picture: '', scope: 2  },
    {date: '2023-05-05', content: '나는 배가 너무 고파용', icon: 4, picture: '', scope: 1  },
    {date: '2023-05-16', content: '나는 배가 너무 고파용', icon: 7, picture: '', scope: 0  },
];

const GROUP_DUMMY = [
    {
        groupId: 0,
        primaryColor: '#FDE4F7',
        FontColor: '#FE4545',
        InviteColor: '#FA9B9B',
        groupName: '사이버보안 캡스톤디자인 스터디',
        memberList: ['손진혁', '이재현', '장연지'],
        content: '사이버보안 캡스톤디자인 스터디입니다.'
    },
    {
        groupId: 1,
        primaryColor: '#FFFDCF',
        FontColor: '#FEB445',
        InviteColor: '#FAE59B',
        groupName: '해머',
        memberList: ['손진혁', '이재현', '장연지', '한창민', '이민서', '임수진', '문채원', '전주현', '문서영'],
        content: '사이버보안학과 해머'
    },
];

const CALENDAR_SCHEDULE_DUMMY = [
    {
        id: 'cli2s9n720007llcba63rbzbz',
        title: 'testTitle',
        summary: 'test Summary',
        categoryName: '2',
        category: { name: '', ownerId: '', owner: '', schedules: ''},
        startDate: new Date('2023-05-25T00:00:00.000Z'),
        startTime: '',
        endDate: new Date('2023-05-25T00:00:00.000Z'),
        endTime: '',
        location: '',
        ownerId: 'cli2rkdny0000llcbbqzahw18',
        owner: {
            id: '',
            name: '',
        },
        createdAt: new Date('2023-05-25T06:58:59.630Z'),
        updatedAt: new Date('2023-05-25T06:58:59.630Z'),
        participants: [{
            id: '',
            userId: '',
        },],
        participantInvities: [],
    },
    {
        id: 'cli2s9n720007ll5cba63rbzbz',
        title: 'testTitle2',
        summary: 'test Summary2',
        categoryName: '1',
        category: { name: '', ownerId: '', owner: '', schedules: ''},
        startDate: new Date('2023-05-25T00:00:00.000Z'),
        startTime: '',
        endDate: new Date('2023-05-25T00:00:00.000Z'),
        endTime: '',
        location: '',
        ownerId: 'cli2rkdny0000llcbbqzahw18',
        owner: {
            id: '',
            name: '',
        },
        createdAt: new Date('2023-05-25T06:58:59.630Z'),
        updatedAt: new Date('2023-05-25T06:58:59.630Z'),
        participants: [{
            id: '',
            userId: '',
        },],
        participantInvities: [],
    },
    {
        id: 'cli2s9n720007llcba63rbzb3z',
        title: 'testTitle3',
        summary: 'test Summary3',
        categoryName: '3',
        category: { name: '', ownerId: '', owner: '', schedules: ''},
        startDate: new Date('2023-05-26T00:00:00.000Z'),
        startTime: '9:00',
        endDate: new Date('2023-05-26T00:00:00.000Z'),
        endTime: '10:00',
        location: '',
        ownerId: 'cli2rkdny0000llcbbqzahw18',
        owner: {
            id: '',
            name: '',
        },
        createdAt: new Date('2023-05-25T06:58:59.630Z'),
        updatedAt: new Date('2023-05-25T06:58:59.630Z'),
        participants: [{
            id: '',
            userId: '',
        },],
        participantInvities: [],
    },
];


const DATE = {
    0: '일요일',
    1: '월요일',
    2: '화요일',
    3: '수요일',
    4: '목요일',
    5: '금요일',
    6: '토요일',
};

export {CALENDAR_SCHEDULE_DUMMY, DATE, GROUP_DUMMY, FRIENDS_LIST, DETAIL_SCHEDULE, COLOR_LIST, SCOPE_DISCLOSURE, DIARY_DUMMY};
