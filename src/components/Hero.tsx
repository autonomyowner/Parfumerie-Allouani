import Typewriter from './Typewriter'
import { useLanguage } from '../contexts/LanguageContext'

const Hero = () => {
  const backgroundImagePath = "/pics/templates/background image.jpg"
  const { t, language } = useLanguage()
  
  const typewriterWords = [
    t('hero.typewriter.premium'),
    t('hero.typewriter.luxury'), 
    t('hero.typewriter.exotic'),
    t('hero.typewriter.designer'),
    t('hero.typewriter.signature')
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-16 px-4 overflow-hidden hero-section-mobile">
      {/* Enhanced Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage: `url("${backgroundImagePath}")`,
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.8) contrast(1.1)',
        }}
      />
      {/* Gradient Overlay for sophistication */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-amber-900/40"></div>
      {/* Additional overlay for text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-400/90 to-orange-500/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-8 shadow-xl border border-white/20 badge-mobile">
            {t('hero.badge')}
          </div>

          {/* Enhanced Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl hero-mobile">
            {t('hero.title')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600">
              <Typewriter 
                words={typewriterWords}
                typeSpeed={150}
                deleteSpeed={75}
                pauseTime={2500}
                className="inline-block"
              />
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <p className="text-xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg subtitle-mobile">
            {t('hero.subtitle')}
          </p>

          {/* Enhanced CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${language === 'ar' ? 'sm:flex-row-reverse' : ''}`}>
            <button 
              className="text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 border border-[#03045e]/30 mobile-button"
              style={{
                background: 'linear-gradient(to right, #03045e, #023e8a)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #023e8a, #0077b6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #03045e, #023e8a)';
              }}
              onClick={() => window.open('/services', '_self')}
            >
              {t('hero.shopPerfumes')}
            </button>
            <button 
              className="text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 border border-[#03045e]/30 mobile-button"
              style={{
                background: 'linear-gradient(to right, #03045e, #023e8a)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #023e8a, #0077b6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #03045e, #023e8a)';
              }}
              onClick={() => window.open('/services', '_self')}
            >
              {t('hero.viewCollections')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 