import React from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, ChevronDown, Languages, MapPin, Search, Sparkles } from 'lucide-react'
import './styles.css'

const jobs = [
  { company: 'MIRAI LAB', role: 'プロダクトデザイナー', place: '東京・渋谷', type: '正社員', tone: 'lavender', mark: 'M' },
  { company: 'kikori', role: 'コミュニティマネージャー', place: '京都・中京区', type: '契約社員', tone: 'gold', mark: '木' },
  { company: 'STUDIO WAVE', role: 'フロントエンドエンジニア', place: '大阪・北区', type: '正社員', tone: 'sky', mark: 'W' }
]

function App() {
  return <main>
    <section className="hero">
      <nav className="nav wrap">
        <a className="brand" href="#top"><i></i>NIPPON<br/>CAREER</a>
        <div className="navlinks"><a href="#jobs">求人を探す</a><a href="#about">私たちについて</a><a href="#guide">はじめての方へ</a></div>
        <button className="language"><Languages size={17}/> 日本語 <ChevronDown size={14}/></button>
        <button className="menu" aria-label="メニュー"><span></span><span></span></button>
      </nav>

      <div className="hero-art art-one">⌇</div><div className="hero-art art-two">✦</div><div className="sun"></div>
      <div className="hero-copy wrap" id="top">
        <p className="eyebrow"><Sparkles size={15}/> YOUR NEXT CHAPTER, IN JAPAN</p>
        <h1>日本で、<br/><em>わたしらしく</em>働く。</h1>
        <p className="intro">あなたの経験と好奇心が、新しい場所で花開く。<br/>日本の仕事と暮らしを、もっと自分らしく。</p>
        <a href="#jobs" className="primary">仕事を見つける <ArrowRight size={20}/></a>
      </div>
      <div className="hero-photo">
        <div className="photo-grid"></div>
        <div className="portrait" aria-label="東京で働く女性のイラスト">
          <div className="person-head"></div><div className="person-hair"></div><div className="person-body"></div><div className="person-arm"></div>
        </div>
        <div className="float-card"><span className="avatar">◒</span><p><b>あなたに合う仕事</b><br/><small>毎週、新着求人をお届け</small></p><span className="tiny-dot"></span></div>
        <div className="orbit orbit-a"></div><div className="orbit orbit-b"></div>
      </div>
      <div className="scroll-note">SCROLL TO EXPLORE <span></span></div>
    </section>

    <section className="search-section wrap" id="jobs">
      <div className="section-label">FIND YOUR PLACE <span>01</span></div>
      <div className="search-head"><h2>次の一歩を、<br/>ここから探そう。</h2><p>業界、場所、働き方。<br/>気になるキーワードから始めよう。</p></div>
      <div className="search-bar"><div><Search size={21}/><span>職種・キーワードから探す</span></div><div><MapPin size={21}/><span>勤務地を選ぶ</span></div><button aria-label="検索"><ArrowRight size={23}/></button></div>
      <div className="chips"><span>人気の検索</span><a>デザイン</a><a>エンジニア</a><a>未経験OK</a><a>リモート可</a><a>英語を活かす</a></div>
    </section>

    <section className="jobs-section">
      <div className="wrap">
        <div className="jobs-heading"><div><p className="eyebrow dark">PICK UP JOBS</p><h2>注目の求人</h2></div><a className="text-link" href="#all">すべての求人を見る <ArrowRight size={18}/></a></div>
        <div className="job-grid">{jobs.map((job, index) => <article className="job-card" key={job.company}>
          <div className={`company-mark ${job.tone}`}>{job.mark}</div><span className="job-number">0{index + 1}</span>
          <p className="company">{job.company}</p><h3>{job.role}</h3>
          <div className="job-meta"><span><MapPin size={15}/>{job.place}</span><span>{job.type}</span></div>
          <a href="#apply" aria-label={`${job.role}の詳細`} className="round-arrow"><ArrowRight size={20}/></a>
        </article>)}</div>
      </div>
    </section>

    <section className="story wrap" id="about">
      <div className="story-visual"><div className="shape peach"></div><div className="shape navy"></div><div className="shape pink"></div><div className="story-title">WORK<br/><em>WITH</em><br/>JOY.</div><div className="mini-label">TOKYO / KYOTO / OSAKA</div></div>
      <div className="story-copy"><p className="eyebrow dark">OUR PROMISE <span>02</span></p><h2>仕事探しを、<br/>もっと心地よく。</h2><p>キャリアのことも、新しい街での暮らしも。NIPPON CAREERは、あなたの「やってみたい」に寄り添うキャリアパートナーです。</p><a className="text-link" href="#guide">私たちについて <ArrowRight size={18}/></a></div>
    </section>

    <footer id="guide"><div className="wrap footer-inner"><a className="brand footer-brand" href="#top"><i></i>NIPPON<br/>CAREER</a><p>あなたらしいキャリアを、日本で。</p><a href="#top" className="back-top">TOP ↑</a></div></footer>
  </main>
}

createRoot(document.getElementById('root')).render(<App />)
