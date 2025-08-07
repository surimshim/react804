import {useState} from 'react'

// App.js
function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);

  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' }
  ];

  let content = null;

  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, Web" />
  }
  else if (mode === 'READ') {
    let title, body = null;

    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        console.log(topics[i].id, id);
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body} />
  }

  return (
    <div>
      <Header subject="Web" onChangeMode={function () {
        setMode('WELCOME');
      }} />
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode('READ');
        setId(_id);
      }} />
      {content}
    </div>
  );
}

// Header
function Header(props) {
  return (
    <header>
      <h1>
        <a href="/" onClick={function (e) {
          e.preventDefault();
          props.onChangeMode();
        }}>{props.subject}</a>
      </h1>
    </header>
  );
}

// Nav
function Nav(props) {
  const lis = [];

  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a id={t.id} href={"/read/1" + t.id} onClick={function (e) {
      e.preventDefault();
      props.onChangeMode(Number(e.target.id));
    }}>{t.title}</a></li>);
  }

  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  );
}

// Article
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

export default App;
