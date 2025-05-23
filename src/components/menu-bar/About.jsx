import React, { useState } from 'react';
import zyhd from './zyhd.jpg';
import cyberexplorer from './cyberexplorer.jpg';
const styles = {
  container: {
    display: 'flex',
    maxWidth: '1200px',
    margin: '0 auto',
    background: '#222',
    color: '#eee',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
  },
  tabs: {
    width: '200px',
    borderRight: '1px solid #444',
    background: '#333'
  },
  tab: {
    padding: '15px 20px',
    cursor: 'pointer',
    transition: 'background 0.3s'
  },
  activeTab: {
    background: '#555',
    color: '#fff'
  },
  content: {
    flex: 1,
    padding: '20px'
  },
  tabContent: {
    display: 'none'
  },
  activeTabContent: {
    display: 'block'
  },
  developerCard: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '15px',
    background: '#444',
    borderRadius: '8px',
    color: '#eee'
  },
  avatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    marginRight: '20px'
  },
  developerInfo: {
    flex: 1
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px'
  },
  website: {
    color: '#4da6ff',
    textDecoration: 'none'
  }
};

const About = () => {
  const [activeTab, setActiveTab] = useState('developers');

  const switchTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div style={styles.container}>
      <div className="tabs">
        <div 
          style={{...styles.tab, ...(activeTab === 'developers' ? styles.activeTab : {})}} 
          onClick={() => switchTab('developers')} 
          id="tab-developers">
          关于开发者
        </div>
        <div 
          style={{...styles.tab, ...(activeTab === 'about' ? styles.activeTab : {})}} 
          onClick={() => switchTab('about')} 
          id="tab-about">
          关于TW for LOGIC
        </div>
      </div>
      
      <div style={styles.content}>
        {activeTab === 'developers' && (
          <div id="developers" style={{...styles.tabContent, ...(activeTab === 'developers' ? styles.activeTabContent : {})}}>
            <div style={styles.developerCard}>
              <img 
                src={zyhd} 
                style={styles.avatar} 
                alt="智宇 HD" 
              />
              <div style={styles.developerInfo}>
                <div style={styles.name}>智宇 HD</div>
                <a 
                  href="https://zhiyuhub.top" 
                  style={styles.website} 
                  target="_blank" 
                  rel="noopener noreferrer">
                  zhiyuhub.top
                </a>
              </div>
            </div>

            <div style={styles.developerCard}>
              <img 
                src={cyberexplorer}
                style={styles.avatar} 
                alt="Cyberexplorer" 
              />
              <div style={styles.developerInfo}>
                <div style={styles.name}>Cyberexplorer</div>
                <a 
                  href="https://lanwywritexu.github.io" 
                  style={styles.website} 
                  target="_blank" 
                  rel="noopener noreferrer">
                  lanwywritexu.github.io
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div id="about" style={{...styles.tabContent, ...(activeTab === 'about' ? styles.activeTabContent : {})}}>
            <div id='about_p'>
                <p>
                  TW for LOGIC是基于TurboWarp修改的Scratch编辑器，专为LOGIC社区定制开发。
                </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;