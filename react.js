// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import { Button, Input, Select, Progress, Card, Row, Col, Dropdown, Menu, Tabs, Timeline, Collapse } from 'antd';
import { DownloadOutlined, PlayCircleOutlined, CheckCircleOutlined, GlobalOutlined, MenuOutlined, HomeOutlined, QuestionCircleOutlined, InfoCircleOutlined, ToolOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TabPane } = Tabs;
const { Panel } = Collapse;

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [url, setUrl] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [quality, setQuality] = useState('HD');
  const [format, setFormat] = useState('MP4');
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const platforms = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', color: '#1877f2', supported: true },
    { name: 'Instagram', icon: 'fab fa-instagram', color: '#e4405f', supported: true },
    { name: 'Twitter', icon: 'fab fa-twitter', color: '#1da1f2', supported: true },
    { name: 'TikTok', icon: 'fab fa-tiktok', color: '#000000', supported: true },
    { name: 'YouTube', icon: 'fab fa-youtube', color: '#ff0000', supported: true },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', color: '#0077b5', supported: true },
    { name: 'Snapchat', icon: 'fab fa-snapchat-ghost', color: '#fffc00', supported: true },
    { name: 'Pinterest', icon: 'fab fa-pinterest-p', color: '#bd081c', supported: true },
    { name: 'Reddit', icon: 'fab fa-reddit-alien', color: '#ff4500', supported: true },
    { name: 'Tumblr', icon: 'fab fa-tumblr', color: '#35465c', supported: true },
    { name: 'Vimeo', icon: 'fab fa-vimeo-v', color: '#1ab7ea', supported: true },
    { name: 'Twitch', icon: 'fab fa-twitch', color: '#9146ff', supported: true }
  ];

  const features = [
    {
      icon: 'fas fa-download',
      title: 'Fast Downloads',
      description: 'Download videos in seconds with our optimized servers'
    },
    {
      icon: 'fas fa-hd-video',
      title: 'High Quality',
      description: 'Support for HD, 4K and original quality downloads'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Safe & Secure',
      description: 'Your privacy is protected with secure connections'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Mobile Friendly',
      description: 'Works perfectly on all devices and browsers'
    },
    {
      icon: 'fas fa-infinity',
      title: 'Unlimited',
      description: 'No limits on downloads or file sizes'
    },
    {
      icon: 'fas fa-bolt',
      title: 'No Registration',
      description: 'Start downloading immediately without signing up'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Copy Video URL',
      description: 'Copy the link of the video you want to download from any social media platform'
    },
    {
      number: '2',
      title: 'Paste URL',
      description: 'Paste the copied URL into our download input field above'
    },
    {
      number: '3',
      title: 'Choose Quality',
      description: 'Select your preferred video quality and format options'
    },
    {
      number: '4',
      title: 'Download',
      description: 'Click the download button and save the video to your device'
    }
  ];

  const faqData = [
    {
      question: 'Is this video downloader free to use?',
      answer: 'Yes, our video downloader is completely free to use. There are no hidden charges or subscription fees.'
    },
    {
      question: 'Which platforms are supported?',
      answer: 'We support all major social media platforms including Facebook, Instagram, Twitter, TikTok, YouTube, LinkedIn, Snapchat, Pinterest, Reddit, Tumblr, Vimeo, and Twitch.'
    },
    {
      question: 'What video qualities are available?',
      answer: 'We support various video qualities including 4K Ultra HD, HD (1080p), SD (720p), and Low (480p), depending on the original video quality.'
    },
    {
      question: 'Do I need to register an account?',
      answer: 'No registration is required. You can start downloading videos immediately without creating an account.'
    },
    {
      question: 'Is it safe to use this downloader?',
      answer: 'Absolutely! We use secure connections and do not store any of your personal data or downloaded content.'
    },
    {
      question: 'Are there any download limits?',
      answer: 'There are no limits on the number of downloads or file sizes. You can download as many videos as you need.'
    }
  ];

  const handleDownload = () => {
    if (!url.trim()) return;
    
    setIsDownloading(true);
    setDownloadProgress(0);
    
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setMobileMenuVisible(false);
  };

  const mobileMenu = (
    <Menu onClick={({ key }) => handleNavigation(key)}>
      <Menu.Item key="home" icon={<HomeOutlined />}>Home</Menu.Item>
      <Menu.Item key="how-to-use" icon={<ToolOutlined />}>How to Use</Menu.Item>
      <Menu.Item key="platforms" icon={<GlobalOutlined />}>Supported Platforms</Menu.Item>
      <Menu.Item key="faq" icon={<QuestionCircleOutlined />}>FAQ</Menu.Item>
      <Menu.Item key="about" icon={<InfoCircleOutlined />}>About</Menu.Item>
    </Menu>
  );

  const renderHeader = () => (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('home')}>
            <div className="flex-shrink-0 flex items-center">
              <i className="fas fa-video text-2xl text-blue-600 mr-3 animate-pulse"></i>
              <span className="text-xl font-bold text-gray-900">VideoDownloader</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              onClick={() => handleNavigation('home')} 
              className={`text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors duration-300 ${currentPage === 'home' ? 'text-blue-600' : ''}`}
            >
              Home
            </a>
            <a 
              onClick={() => handleNavigation('how-to-use')} 
              className={`text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors duration-300 ${currentPage === 'how-to-use' ? 'text-blue-600' : ''}`}
            >
              How to Use
            </a>
            <a 
              onClick={() => handleNavigation('platforms')} 
              className={`text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors duration-300 ${currentPage === 'platforms' ? 'text-blue-600' : ''}`}
            >
              Supported Platforms
            </a>
            <a 
              onClick={() => handleNavigation('faq')} 
              className={`text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors duration-300 ${currentPage === 'faq' ? 'text-blue-600' : ''}`}
            >
              FAQ
            </a>
            <a 
              onClick={() => handleNavigation('about')} 
              className={`text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors duration-300 ${currentPage === 'about' ? 'text-blue-600' : ''}`}
            >
              About
            </a>
            <Button type="primary" className="!rounded-button whitespace-nowrap hover:scale-105 transition-transform duration-300">
              <DownloadOutlined /> Download
            </Button>
          </nav>

          <div className="md:hidden">
            <Dropdown overlay={mobileMenu} trigger={['click']} visible={mobileMenuVisible} onVisibleChange={setMobileMenuVisible}>
              <Button type="text" icon={<MenuOutlined />} className="!rounded-button whitespace-nowrap cursor-pointer" />
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );

  const renderHomePage = () => (
    <>
      <section 
        className={`relative py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20digital%20technology%20background%20with%20flowing%20data%20streams%20and%20network%20connections%20in%20soft%20blue%20and%20purple%20gradients%2C%20clean%20minimalist%20design%20with%20subtle%20geometric%20patterns%2C%20professional%20tech%20atmosphere%20suitable%20for%20video%20downloading%20website%20hero%20section&width=1440&height=600&seq=hero001&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Download Videos from
            <span className="text-blue-600 block animate-bounce">Any Social Platform</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Fast, free, and secure video downloader supporting all major social media platforms. 
            No registration required, unlimited downloads.
          </p>
          
          <div className="max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-500">
              <Input
                size="large"
                placeholder="Paste your video URL here (Facebook, Instagram, Twitter, TikTok, YouTube...)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="mb-6 text-sm border-gray-200 rounded-lg transition-all duration-300 focus:shadow-lg"
                prefix={<i className="fas fa-link text-gray-400 mr-2"></i>}
              />
              
              {isDownloading && (
                <div className="mb-6 animate-fade-in">
                  <Progress 
                    percent={downloadProgress} 
                    strokeColor="#3b82f6"
                    className="mb-2"
                  />
                  <p className="text-sm text-gray-600">Downloading... {downloadProgress}%</p>
                </div>
              )}
              
              <Button 
                type="primary" 
                size="large" 
                onClick={handleDownload}
                loading={isDownloading}
                disabled={!url.trim()}
                className="w-full !rounded-button whitespace-nowrap h-12 text-lg font-semibold cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <DownloadOutlined /> {isDownloading ? 'Downloading...' : 'Download Video'}
              </Button>
            </div>
          </div>

          <div className="mt-12 animate-fade-in-up animation-delay-900">
            <p className="text-gray-600 mb-6">Supported Platforms:</p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {platforms.slice(0, 6).map((platform, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <i className={`${platform.icon} text-xl animate-pulse`} style={{ color: platform.color }}></i>
                  <span className="text-sm font-medium text-gray-700">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Platform</h2>
            <p className="text-lg text-gray-600">Select the social media platform to download from</p>
          </div>
          
          <Row gutter={[24, 24]}>
            {platforms.map((platform, index) => (
              <Col xs={12} sm={8} md={6} lg={3} key={index}>
                <Card
                  hoverable
                  className={`text-center cursor-pointer transition-all duration-500 border-2 hover:scale-105 ${
                    selectedPlatform === platform.name 
                      ? 'border-blue-500 shadow-lg transform scale-105' 
                      : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                  }`}
                  onClick={() => setSelectedPlatform(platform.name)}
                >
                  <div className="py-4">
                    <i 
                      className={`${platform.icon} text-4xl mb-3 transition-transform duration-300 hover:scale-110`} 
                      style={{ color: platform.color }}
                    ></i>
                    <h3 className="font-semibold text-gray-900">{platform.name}</h3>
                    {platform.supported && (
                      <div className="mt-2">
                        <CheckCircleOutlined className="text-green-500 text-sm" />
                        <span className="text-xs text-green-600 ml-1">Supported</span>
                      </div>
                    )}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Download Options</h2>
            <p className="text-lg text-gray-600">Customize your download preferences</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-500">
            <Row gutter={[32, 32]}>
              <Col xs={24} md={8}>
                <div className="text-center hover:scale-105 transition-transform duration-300">
                  <i className="fas fa-video text-3xl text-blue-600 mb-4 animate-pulse"></i>
                  <h3 className="font-semibold text-gray-900 mb-3">Video Quality</h3>
                  <Select
                    value={quality}
                    onChange={setQuality}
                    className="w-full"
                    size="large"
                  >
                    <Option value="4K">4K Ultra HD</Option>
                    <Option value="HD">HD (1080p)</Option>
                    <Option value="SD">SD (720p)</Option>
                    <Option value="Low">Low (480p)</Option>
                  </Select>
                </div>
              </Col>
              
              <Col xs={24} md={8}>
                <div className="text-center hover:scale-105 transition-transform duration-300">
                  <i className="fas fa-file-video text-3xl text-green-600 mb-4 animate-pulse"></i>
                  <h3 className="font-semibold text-gray-900 mb-3">File Format</h3>
                  <Select
                    value={format}
                    onChange={setFormat}
                    className="w-full"
                    size="large"
                  >
                    <Option value="MP4">MP4</Option>
                    <Option value="WebM">WebM</Option>
                    <Option value="AVI">AVI</Option>
                    <Option value="MOV">MOV</Option>
                  </Select>
                </div>
              </Col>
              
              <Col xs={24} md={8}>
                <div className="text-center hover:scale-105 transition-transform duration-300">
                  <i className="fas fa-info-circle text-3xl text-purple-600 mb-4 animate-pulse"></i>
                  <h3 className="font-semibold text-gray-900 mb-3">File Size</h3>
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-300">
                    <p className="text-2xl font-bold text-gray-900">~25 MB</p>
                    <p className="text-sm text-gray-600">Estimated size</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Download videos in 4 simple steps</p>
          </div>
          
          <Row gutter={[32, 32]}>
            {steps.map((step, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <div className="text-center hover:scale-105 transition-transform duration-500" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-700 transition-colors duration-300 animate-bounce">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-8"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Downloader?</h2>
            <p className="text-lg text-gray-600">Powerful features that make downloading videos effortless</p>
          </div>
          
          <Row gutter={[32, 32]}>
            {features.map((feature, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card className="h-full text-center border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-500 cursor-pointer">
                  <div className="py-4">
                    <i className={`${feature.icon} text-4xl text-blue-600 mb-4 hover:scale-110 transition-transform duration-300`}></i>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );

  const renderHowToUsePage = () => (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">How to Use VideoDownloader</h1>
          <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-300">Complete guide to downloading videos from any platform</p>
        </div>

        <Tabs defaultActiveKey="1" size="large" className="animate-fade-in-up animation-delay-600">
          <TabPane tab="Quick Start" key="1">
            <Timeline mode="left" className="mt-8">
              {steps.map((step, index) => (
                <Timeline.Item 
                  key={index}
                  dot={
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-sm font-bold text-white">{step.number}</span>
                    </div>
                  }
                >
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </Timeline.Item>
              ))}
            </Timeline>
          </TabPane>
          
          <TabPane tab="Platform Specific" key="2">
            <div className="space-y-6 mt-8">
              {platforms.slice(0, 8).map((platform, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center space-x-4">
                    <i className={`${platform.icon} text-3xl`} style={{ color: platform.color }}></i>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{platform.name}</h3>
                      <p className="text-gray-600 mb-2">
                        To download from {platform.name}, simply copy the video URL from your browser and paste it into our downloader.
                      </p>
                      <div className="text-sm text-gray-500">
                        <strong>URL Format:</strong> https://{platform.name.toLowerCase()}.com/...
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabPane>
          
          <TabPane tab="Tips & Tricks" key="3">
            <div className="mt-8 space-y-6">
              <Card className="border-l-4 border-l-blue-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Getting Better Quality</h3>
                <p className="text-gray-600">Always select the highest quality available. Our system automatically detects the best quality from the source.</p>
              </Card>
              
              <Card className="border-l-4 border-l-green-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">⚡ Faster Downloads</h3>
                <p className="text-gray-600">Use a stable internet connection and avoid downloading multiple videos simultaneously for optimal speed.</p>
              </Card>
              
              <Card className="border-l-4 border-l-purple-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">📱 Mobile Usage</h3>
                <p className="text-gray-600">Our downloader works perfectly on mobile devices. Use the share function in apps to copy URLs easily.</p>
              </Card>
              
              <Card className="border-l-4 border-l-orange-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">🔐 Privacy Protection</h3>
                <p className="text-gray-600">We don't store your URLs or downloaded content. Everything is processed securely and deleted immediately.</p>
              </Card>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );

  const renderPlatformsPage = () => (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Supported Platforms</h1>
          <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-300">Download videos from all major social media platforms</p>
        </div>

        <Row gutter={[24, 24]} className="animate-fade-in-up animation-delay-600">
          {platforms.map((platform, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card
                hoverable
                className="text-center cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="py-6">
                  <i 
                    className={`${platform.icon} text-5xl mb-4 transition-transform duration-300 hover:scale-110`} 
                    style={{ color: platform.color }}
                  ></i>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{platform.name}</h3>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircleOutlined className="text-green-500" />
                    <span className="text-sm text-green-600 font-medium">Fully Supported</span>
                  </div>
                  <Button 
                    type="primary" 
                    size="small" 
                    className="mt-3 !rounded-button whitespace-nowrap hover:scale-105 transition-transform duration-300"
                    onClick={() => {
                      setSelectedPlatform(platform.name);
                      setCurrentPage('home');
                    }}
                  >
                    Try Now
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Platform Features</h2>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-600">Video Platforms</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircleOutlined className="text-green-500" />
                    <span>YouTube - All video formats and qualities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleOutlined className="text-green-500" />
                    <span>Vimeo - High-quality downloads</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleOutlined className="text-green-500" />
                    <span>TikTok - Without watermarks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleOutlined className="text-green-500" />
                    <span>Twitch - VODs and highlights</span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-600">Social Media</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircleOutlined className="text-green-500" />
                    <span>Facebook - Public and private videos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleOutlined className="text-green-500" />
                    <span>Instagram - Stories, Reels, IGTV</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleOutlined className="text-green-500" />
                    <span>Twitter - All video content</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleOutlined className="text-green-500" />
                    <span>LinkedIn - Professional content</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );

  const renderFAQPage = () => (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-300">Find answers to common questions about our video downloader</p>
        </div>

        <div className="animate-fade-in-up animation-delay-600">
          <Collapse 
            size="large" 
            className="bg-white shadow-lg rounded-lg"
            expandIconPosition="right"
          >
            {faqData.map((faq, index) => (
              <Panel 
                header={
                  <div className="flex items-center space-x-3">
                    <QuestionCircleOutlined className="text-blue-600" />
                    <span className="font-semibold">{faq.question}</span>
                  </div>
                } 
                key={index}
              >
                <p className="text-gray-600 leading-relaxed pl-6">{faq.answer}</p>
              </Panel>
            ))}
          </Collapse>
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6">Can't find the answer you're looking for? Please contact our support team.</p>
          <Button type="primary" size="large" className="!rounded-button whitespace-nowrap hover:scale-105 transition-transform duration-300">
            <i className="fas fa-envelope mr-2"></i>
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );

  const renderAboutPage = () => (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">About VideoDownloader</h1>
          <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-300">Your trusted partner for video downloading since 2020</p>
        </div>

        <Row gutter={[32, 32]} className="animate-fade-in-up animation-delay-600">
          <Col xs={24} lg={12}>
            <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At VideoDownloader, we believe that accessing and sharing digital content should be simple, fast, and secure. 
                Our mission is to provide users worldwide with the most reliable and efficient video downloading solution.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We continuously innovate and improve our platform to support new social media platforms and video formats, 
                ensuring you can download any video you need, whenever you need it.
              </p>
            </div>
          </Col>
          
          <Col xs={24} lg={12}>
            <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircleOutlined className="text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">100% Free</h3>
                    <p className="text-gray-600">No hidden fees or premium subscriptions required</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleOutlined className="text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Privacy First</h3>
                    <p className="text-gray-600">We don't store your data or track your activity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleOutlined className="text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Always Updated</h3>
                    <p className="text-gray-600">Regular updates to support new platforms and features</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Journey</h2>
          <Timeline mode="alternate" className="mt-8">
            <Timeline.Item 
              dot={<i className="fas fa-rocket text-blue-600"></i>}
              color="blue"
            >
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">2020 - Launch</h3>
                <p className="text-gray-600">VideoDownloader was founded with support for 3 major platforms</p>
              </div>
            </Timeline.Item>
            <Timeline.Item 
              dot={<i className="fas fa-users text-green-600"></i>}
              color="green"
            >
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">2021 - 1M Users</h3>
                <p className="text-gray-600">Reached our first million users and expanded to 8 platforms</p>
              </div>
            </Timeline.Item>
            <Timeline.Item 
              dot={<i className="fas fa-globe text-purple-600"></i>}
              color="purple"
            >
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">2022 - Global Expansion</h3>
                <p className="text-gray-600">Added support for 12+ platforms and multiple languages</p>
              </div>
            </Timeline.Item>
            <Timeline.Item 
              dot={<i className="fas fa-award text-orange-600"></i>}
              color="orange"
            >
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">2023 - Industry Leader</h3>
                <p className="text-gray-600">Became the #1 trusted video downloader with 10M+ users</p>
              </div>
            </Timeline.Item>
            <Timeline.Item 
              dot={<i className="fas fa-star text-yellow-600"></i>}
              color="gold"
            >
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900">2024 - Innovation</h3>
                <p className="text-gray-600">Introduced AI-powered quality enhancement and bulk downloads</p>
              </div>
            </Timeline.Item>
          </Timeline>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Join Millions of Happy Users</h2>
          <p className="text-lg mb-6">Experience the fastest and most reliable video downloading service</p>
          <Button 
            type="primary" 
            size="large" 
            className="!rounded-button whitespace-nowrap bg-white text-blue-600 hover:scale-105 transition-transform duration-300"
            onClick={() => setCurrentPage('home')}
          >
            Start Downloading Now
          </Button>
        </div>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return renderHomePage();
      case 'how-to-use':
        return renderHowToUsePage();
      case 'platforms':
        return renderPlatformsPage();
      case 'faq':
        return renderFAQPage();
      case 'about':
        return renderAboutPage();
      default:
        return renderHomePage();
    }
  };

  const renderFooter = () => (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Row gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <div className="flex items-center mb-4">
              <i className="fas fa-video text-2xl text-blue-400 mr-3 animate-pulse"></i>
              <span className="text-xl font-bold">VideoDownloader</span>
            </div>
            <p className="text-gray-400 mb-4">
              The fastest and most reliable way to download videos from all major social media platforms.
            </p>
            <div className="flex space-x-4">
              <i className="fab fa-facebook-f text-xl text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-300"></i>
              <i className="fab fa-twitter text-xl text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-300"></i>
              <i className="fab fa-instagram text-xl text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-300"></i>
              <i className="fab fa-linkedin-in text-xl text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-300"></i>
            </div>
          </Col>
          
          <Col xs={24} md={8}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a onClick={() => handleNavigation('home')} className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300">Home</a></li>
              <li><a onClick={() => handleNavigation('how-to-use')} className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300">How to Use</a></li>
              <li><a onClick={() => handleNavigation('platforms')} className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300">Supported Platforms</a></li>
              <li><a onClick={() => handleNavigation('faq')} className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300">FAQ</a></li>
              <li><a onClick={() => handleNavigation('about')} className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300">About</a></li>
            </ul>
          </Col>
          
          <Col xs={24} md={8}>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="text-gray-400">
                <i className="fas fa-envelope mr-2"></i>
                support@videodownloader.com
              </p>
              <p className="text-gray-400">
                <i className="fas fa-phone mr-2"></i>
                +1 (555) 123-4567
              </p>
              <div className="flex items-center mt-4">
                <GlobalOutlined className="mr-2" />
                <Select defaultValue="en" className="bg-gray-800 border-gray-700">
                  <Option value="en">English</Option>
                  <Option value="es">Español</Option>
                  <Option value="fr">Français</Option>
                  <Option value="de">Deutsch</Option>
                </Select>
              </div>
            </div>
          </Col>
        </Row>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 VideoDownloader. All rights reserved. | 
            <i className="fab fa-cc-visa text-xl mx-2"></i>
            <i className="fab fa-cc-paypal text-xl mx-2"></i>
            <i className="fab fa-cc-mastercard text-xl mx-2"></i>
          </p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-900 {
          animation-delay: 0.9s;
        }
        
        .!rounded-button {
          border-radius: 8px !important;
        }
        
        .cursor-pointer:hover {
          cursor: pointer;
        }
        
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        
        input[type="number"] {
          -moz-appearance: textfield;
        }
      `}</style>
      
      {renderHeader()}
      {renderCurrentPage()}
      {renderFooter()}
    </div>
  );
};

export default App
