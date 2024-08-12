# 사용자 중심의 공유 캘린더 및 다이어리 서비스

## 개요

이 프로젝트는 사용자 중심의 공유 캘린더 및 다이어리 서비스를 개발하기 위한 것입니다. React를 기반으로 클라이언트 인터페이스를 구현하였으며, 주요 기능으로는 일정 추가, 수정, 삭제, 공유 및 다이어리 항목 관리가 포함됩니다.

## 기능

- **캘린더**: 사용자가 날짜를 선택하고 일정을 관리할 수 있습니다.
- **다이어리**: 사용자들이 일기를 작성하고 관리할 수 있습니다.
- **일정 공유**: 사용자가 다른 사람과 캘린더 일정을 공유할 수 있습니다.

## 기술 스택

- **React**: 클라이언트 사이드 UI 라이브러리
- **React-Calendar**: 캘린더 컴포넌트

## 클라이언트 인터페이스 구현

### 캘린더 컴포넌트

이 컴포넌트는 날짜를 선택할 수 있는 캘린더 UI를 제공합니다.

```jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    // 여기에 날짜 변경 시 처리할 로직 추가
  };

  return (
    <div>
      <h2>Shared Calendar</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
      />
    </div>
  );
};

export default CalendarComponent;

```

### 다이어리 컴포넌트

이 컴포넌트는 사용자들이 다이어리 항목을 추가하고 목록을 표시할 수 있도록 합니다.

```jsx
import React, { useState } from 'react';

const DiaryComponent = () => {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  return (
    <div>
      <h2>Diary</h2>
      <button onClick={() => addEntry('New Entry')}>Add Entry</button>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default DiaryComponent;

```

### 일정 공유 기능

이 컴포넌트는 이메일을 입력하여 캘린더 일정을 공유할 수 있는 모달을 제공합니다.

```jsx
import React, { useState } from 'react';

const ShareModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  const handleShare = () => {
    // 여기에 일정 공유 로직 추가
    console.log(`Shared with: ${email}`);
    onClose();
  };

  return (
    isOpen ? (
      <div className="modal">
        <h2>Share Calendar</h2>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleShare}>Share</button>
        <button onClick={onClose}>Close</button>
      </div>
    ) : null
  );
};

export default ShareModal;

```

### 전체 애플리케이션 통합

이 코드는 위의 컴포넌트들을 통합하여 전체 애플리케이션을 구성합니다.

```jsx
import React, { useState } from 'react';
import CalendarComponent from './CalendarComponent';
import DiaryComponent from './DiaryComponent';
import ShareModal from './ShareModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openShareModal = () => setIsModalOpen(true);
  const closeShareModal = () => setIsModalOpen(false);

  return (
    <div>
      <header>
        <h1>My Calendar and Diary</h1>
        <button onClick={openShareModal}>Share Calendar</button>
      </header>
      <main>
        <CalendarComponent />
        <DiaryComponent />
      </main>
      <ShareModal isOpen={isModalOpen} onClose={closeShareModal} />
    </div>
  );
};

export default App;

```
