import React, { createContext, useContext, useState, type ReactNode } from 'react'

type Language = 'ar' | 'en' | 'fr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar')

  const translations = {
    ar: {
      // Navigation
      'nav.home': 'الرئيسية',
      'nav.perfumes': 'العطور',
      'nav.productGros': 'المنتجات بالجملة',
      'nav.contact': 'اتصل بنا',
      'nav.shopNow': 'تسوق الآن',
      
      // Hero Section
      'hero.badge': '✨ محل علواني لبيع العطور - رحلة ساحرة من العبق والأناقة',
      'hero.title': 'رحلتك العطرية تبدأ هنا',
      'hero.typewriter.premium': 'عالم سحري',
      'hero.typewriter.luxury': 'روائح فريدة',
      'hero.typewriter.exotic': 'عطور راقية',
      'hero.typewriter.designer': 'خلطات مميزة',
      'hero.typewriter.signature': 'مسك وعود',
      'hero.subtitle': 'محل علواني لبيع العطور هو واحد من أروع المحلات التي تأخذك في رحلة ساحرة من العبق والأناقة. إنه عالم سحري ينبض بالنسائم والروائح الفريدة، حيث يمكنك استكشاف مجموعة واسعة من الروائح الفخمة والعطور الراقية.',
      'hero.shopPerfumes': 'استكشف العطور',
      'hero.viewCollections': 'اكتشف المجموعات',
      
      // About Section
      'about.title': 'فريق متفانٍ من الخبراء والعارفين',
      'about.description': 'ستجد عندنا فريق متفانٍ من الخبراء والعارفين في عالم العطور، يساعدونك بكل احترافية وودٍّ على اختيار العطر المثالي الذي يناسب شخصيتك ويعكس أناقتك الفريدة. ستكون تجربة اختيار العطر المناسب تجربة ممتعة ومثيرة للاهتمام.',
      'about.shopButton': 'اكتشف تجربتنا',
      
      // Services/Collections Section
      'services.title': 'مجموعاتنا المتميزة',
      'services.subtitle': 'ستبهرك روعة التصاميم وجودة المنتجات التي تقدمها هذه الواحة العطرية. بالإضافة إلى مجموعة العطور المتميزة، خلطات، مسك، عود.',
      'services.qualityBadge': '✨ جودة أصيلة وفاخرة مضمونة: منتجات أصلية فقط مع استشارة عطرية متخصصة',
      'services.luxuryPerfumes.title': 'عطور فاخرة',
      'services.luxuryPerfumes.description': 'مجموعة واسعة من الروائح الفخمة والعطور الراقية التي تقدمها هذه الواحة العطرية. ستجد عندنا أفضل العطور من الماركات العالمية.',
      'services.nicheFragrances.title': 'خلطات مميزة',
      'services.nicheFragrances.description': 'خلطات عطرية فريدة ومميزة، مسك وعود أصيلة من أفضل المصادر. عطور حصرية للعملاء المميزين الذين يقدرون الجودة والتميز.',
      'services.signatureCollections.title': 'مسك وعود',
      'services.signatureCollections.description': 'مجموعة منتقاة بعناية من المسك والعود الأصيل. من العطور الدافئة إلى العطور المنعشة، لدينا العطر المثالي لكل مناسبة.',
      'services.shopNow': 'تسوق الآن',
      'services.showcase.badge': '✨ عرض المجموعة الفاخرة',
      'services.showcase.title': 'اكتشف مجموعتنا من العطور الفاخرة',
      'services.showcase.description': 'استمتع بأجمل مجموعة من العطور الفاخرة من الماركات المعروفة عالمياً. كل عطر منتقى بعناية لتقديم تجربة عطرية فاخرة مثالية.',
      'services.showcase.shopNow': 'تسوق الآن',
      
      // Popular Section
      'popular.title': 'أشهر عطورنا',
      'popular.mobileHint': 'اسحب يساراً أو يميناً للتصفح • اضغط واسحب للتمرير',
      'popular.discount': 'خصم {discount}%',
      
      // Contact Section
      'contact.title': 'تجربة استثنائية لن تنساها',
      'contact.description': 'في ختام الزيارة، ستغادر المحل بابتسامة عريضة على وجهك وقلب ممتن مليء بالسعادة لاكتشافك الجوهر الفريد للجمال والرقي في هذا العالم المثير للحواس. فلا شك أن زيارة محلنا للعطور ستكون تجربة استثنائية لن تنساها أبداً.',
      'contact.shopNow': 'زرنا الآن',
      
      // Contact Page
      'contactPage.badge': '✨ عطور فاخرة ومستحضرات عطرية راقية',
      'contactPage.title': 'اتصل بعطور علواني',
      'contactPage.subtitle': 'مستعد لاكتشاف عطرك التوقيعي المثالي؟ تواصل معنا لاستكشاف مجموعتنا الفاخرة من العطور الراقية. نحن هنا لمساعدتك في العثور على العطر المثالي الذي يطابق شخصيتك وأسلوبك.',
      'contactPage.form.badge': '🛒 نموذج طلب سريع',
      'contactPage.form.title': 'اطلب عطرك',
      'contactPage.form.subtitle': 'أدخل تفاصيلك، اختر ولايتك، وشاهد سعر التوصيل فوراً.',
      'contactPage.form.firstName': 'الاسم الأول',
      'contactPage.form.firstNamePlaceholder': 'أدخل اسمك الأول',
      'contactPage.form.lastName': 'اسم العائلة',
      'contactPage.form.lastNamePlaceholder': 'أدخل اسم عائلتك',
      'contactPage.form.phone': 'رقم الهاتف',
      'contactPage.form.phonePlaceholder': '+213 559 94 82 46',
      'contactPage.form.product': 'المنتج',
      'contactPage.form.productPlaceholder': 'اسم المنتج أو الرابط',
      'contactPage.form.quantity': 'الكمية',
      'contactPage.form.searchWilaya': 'البحث عن الولاية',
      'contactPage.form.searchWilayaPlaceholder': 'اكتب اسم الولاية...',
      'contactPage.form.chooseWilaya': 'اختر ولايتك',
      'contactPage.form.chooseWilayaPlaceholder': 'اختر ولايتك',
      'contactPage.form.deliveryPrice': 'سعر التوصيل: {price}',
      'contactPage.form.deliveryTime': 'وقت التوصيل المتوقع: {time}',
      'contactPage.form.placeOrder': '🛒 تقديم الطلب',
      'contactPage.form.sendingOrder': '⏳ جاري إرسال طلبك...',
      'contactPage.form.success.title': 'تم إرسال الرسالة بنجاح!',
      'contactPage.form.success.message': 'سنتواصل معك خلال 24 ساعة.',
      'contactPage.form.error.title': 'فشل في إرسال الرسالة',
      'contactPage.form.error.message': 'يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.',
      'contactPage.whyChoose.title': 'لماذا تختار عطور علواني؟',
      'contactPage.whyChoose.expert': 'استشاريو عطور خبراء مع سنوات من الخبرة',
      'contactPage.whyChoose.authentic': 'عطور فاخرة أصيلة من أفضل الماركات',
      'contactPage.whyChoose.personal': 'مطابقة عطور شخصية واستشارة',
      'contactPage.whyChoose.delivery': 'توصيل على مستوى البلاد مع العناية والخبرة',
      'contactPage.cta.title': 'مستعد للعثور على عطرك التوقيعي؟',
      'contactPage.cta.description': 'لست متأكداً من العطر المناسب لك؟ احصل على استشارة عطرية مجانية لمدة 30 دقيقة — بدون التزام.',
      'contactPage.cta.bookConsultation': '🌸 احجز استشارة عطرية مجانية',
      'contactPage.cta.viewPerfumes': '🌸 عرض العطور',
      'contactPage.cta.support': 'عطور فاخرة تُسلم على مستوى البلاد · دعم واتساب 24/7',
      
      // Product Gros Section
      'productGros.badge': '🏪 منتجات عطور بالجملة',
      'productGros.title': 'المنتجات بالجملة - تجزئة',
      'productGros.subtitle': 'اكتشف مجموعاتنا الحصرية من العطور بالجملة المصممة للتجار والمتاجر وأصحاب الأعمال. احصل على أسعار جملة تنافسية ومنتجات أصيلة ودعم تجاري شامل.',
      'productGros.benefitsBadge': '🏢 فوائد الجملة: أسعار جملة • دعم تجاري • توصيل سريع',
      'productGros.contactWholesale': 'اتصل للجملة',
      'productGros.cta.badge': '🏢 ابدأ عملك التجاري للعطور اليوم',
      'productGros.cta.title': 'مستعد لبدء عملك التجاري للعطور؟',
      'productGros.cta.description': 'انضم إلى مئات التجار الناجحين الذين يثقون بنا لاحتياجاتهم من العطور بالجملة. ابدأ بأسعار تنافسية ومنتجات أصيلة ودعم تجاري شامل.',
      'productGros.cta.getPricing': 'احصل على أسعار الجملة',
      'productGros.cta.callNow': 'اتصل الآن: +213 671 38 91 13',
      
      // Footer
      'footer.company': 'عطور علواني',
      'footer.description': 'شريكك الموثوق للعطور الفاخرة والمستحضرات العطرية الراقية في الجزائر.',
      'footer.quickLinks': 'روابط سريعة',
      'footer.contact': 'اتصل بنا',
      'footer.followUs': 'تابعنا',
      'footer.rights': '© 2024 عطور علواني. جميع الحقوق محفوظة.',
    },
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.perfumes': 'Perfumes',
      'nav.productGros': 'Product Gros',
      'nav.contact': 'Contact',
      'nav.shopNow': 'SHOP NOW',
      
      // Hero Section
      'hero.badge': '✨ Allouani Perfume Store - A Magical Journey of Fragrance & Elegance',
      'hero.title': 'Your Fragrant Journey Begins Here',
      'hero.typewriter.premium': 'Magical World',
      'hero.typewriter.luxury': 'Unique Scents',
      'hero.typewriter.exotic': 'Luxury Perfumes',
      'hero.typewriter.designer': 'Special Blends',
      'hero.typewriter.signature': 'Musk & Oud',
      'hero.subtitle': 'Allouani Perfume Store is one of the most wonderful stores that takes you on a magical journey of fragrance and elegance. It is a magical world that pulses with breezes and unique scents, where you can explore a wide range of luxurious and refined fragrances.',
      'hero.shopPerfumes': 'Explore Perfumes',
      'hero.viewCollections': 'Discover Collections',
      
      // About Section
      'about.title': 'Dedicated Team of Experts and Connoisseurs',
      'about.description': 'You will find with us a dedicated team of experts and connoisseurs in the world of perfumes, who help you with all professionalism and kindness to choose the perfect fragrance that suits your personality and reflects your unique elegance. Choosing the right fragrance will be a fun and exciting experience.',
      'about.shopButton': 'Discover Our Experience',
      
      // Services/Collections Section
      'services.title': 'Our Distinguished Collections',
      'services.subtitle': 'You will be amazed by the magnificence of designs and quality of products offered by this fragrant oasis. In addition to the distinguished collection of perfumes, blends, musk, and oud.',
      'services.qualityBadge': '✨ Authentic & Premium Quality Guaranteed: Only Original Products with Expert Fragrance Advice',
      'services.luxuryPerfumes.title': 'Luxury Perfumes',
      'services.luxuryPerfumes.description': 'A wide range of luxurious and refined fragrances offered by this fragrant oasis. You will find with us the best perfumes from international brands.',
      'services.nicheFragrances.title': 'Special Blends',
      'services.nicheFragrances.description': 'Unique and distinctive aromatic blends, authentic musk and oud from the best sources. Exclusive fragrances for discerning customers who appreciate quality and excellence.',
      'services.signatureCollections.title': 'Musk & Oud',
      'services.signatureCollections.description': 'A carefully selected collection of authentic musk and oud. From warm fragrances to refreshing scents, we have the perfect fragrance for every occasion.',
      'services.shopNow': 'Shop Now',
      'services.showcase.badge': '✨ Premium Collection Showcase',
      'services.showcase.title': 'Discover Our Luxury Fragrance Collection',
      'services.showcase.description': 'Experience the finest selection of premium perfumes from world-renowned brands. Each fragrance is carefully curated to bring you the ultimate luxury scent experience.',
      'services.showcase.shopNow': 'Shop Now',
      
      // Popular Section
      'popular.title': 'Our most popular perfumes',
      'popular.mobileHint': 'Swipe left or right to browse • Tap and drag to scroll',
      'popular.discount': 'خصم {discount}%',
      
      // Contact Section
      'contact.title': 'An Exceptional Experience You Will Never Forget',
      'contact.description': 'At the end of your visit, you will leave the store with a wide smile on your face and a grateful heart full of happiness for discovering the unique essence of beauty and elegance in this world that excites the senses. There is no doubt that visiting our perfume store will be an exceptional experience you will never forget.',
      'contact.shopNow': 'Visit Us Now',
      
      // Contact Page
      'contactPage.badge': '✨ Premium Perfumes & Luxury Fragrances',
      'contactPage.title': 'Contact Allouani Perfum',
      'contactPage.subtitle': 'Ready to discover your perfect signature scent? Get in touch with us to explore our premium collection of luxury fragrances. We\'re here to help you find the ideal perfume that matches your personality and style.',
      'contactPage.form.badge': '🛒 Quick Order Form',
      'contactPage.form.title': 'Order Your Perfume',
      'contactPage.form.subtitle': 'Enter your details, choose your wilaya, and see delivery price instantly.',
      'contactPage.form.firstName': 'First Name',
      'contactPage.form.firstNamePlaceholder': 'Enter your first name',
      'contactPage.form.lastName': 'Last Name',
      'contactPage.form.lastNamePlaceholder': 'Enter your last name',
      'contactPage.form.phone': 'Phone Number',
      'contactPage.form.phonePlaceholder': '+213 559 94 82 46',
      'contactPage.form.product': 'Product',
      'contactPage.form.productPlaceholder': 'Product name or link',
      'contactPage.form.quantity': 'Quantity',
      'contactPage.form.searchWilaya': 'Search Wilaya',
      'contactPage.form.searchWilayaPlaceholder': 'Type wilaya name...',
      'contactPage.form.chooseWilaya': 'Choose Your Wilaya',
      'contactPage.form.chooseWilayaPlaceholder': 'Select your wilaya',
      'contactPage.form.deliveryPrice': 'Delivery Price: {price}',
      'contactPage.form.deliveryTime': 'Estimated delivery: {time}',
      'contactPage.form.placeOrder': '🛒 Place Order',
      'contactPage.form.sendingOrder': '⏳ Sending Your Order...',
      'contactPage.form.success.title': 'Message sent successfully!',
      'contactPage.form.success.message': 'We\'ll get back to you within 24 hours.',
      'contactPage.form.error.title': 'Failed to send message',
      'contactPage.form.error.message': 'Please try again or contact us directly.',
      'contactPage.whyChoose.title': 'Why Choose Allouani Perfum?',
      'contactPage.whyChoose.expert': 'Expert fragrance consultants with years of experience',
      'contactPage.whyChoose.authentic': 'Authentic premium perfumes from top brands',
      'contactPage.whyChoose.personal': 'Personal scent matching and consultation',
      'contactPage.whyChoose.delivery': 'Nationwide delivery with care and expertise',
      'contactPage.cta.title': 'Ready to Find Your Signature Scent?',
      'contactPage.cta.description': 'Not sure which fragrance suits you? Get a free 30-minute fragrance consultation — no obligation.',
      'contactPage.cta.bookConsultation': '🌸 Book Free Fragrance Consultation',
      'contactPage.cta.viewPerfumes': '🌸 View Perfumes',
      'contactPage.cta.support': 'Premium fragrances delivered nationwide · 24/7 WhatsApp Support',
      
      // Product Gros Section
      'productGros.badge': '🏪 Wholesale Perfume Products',
      'productGros.title': 'Product Gros - Wholesale',
      'productGros.subtitle': 'Discover our exclusive wholesale perfume collections designed for retailers, boutiques, and business owners. Get competitive bulk pricing, authentic products, and comprehensive business support.',
      'productGros.benefitsBadge': '🏢 Wholesale Benefits: Bulk Pricing • Business Support • Fast Delivery',
      'productGros.contactWholesale': 'Contact for Wholesale',
      'productGros.cta.badge': '🏢 Start Your Wholesale Business Today',
      'productGros.cta.title': 'Ready to Start Your Perfume Business?',
      'productGros.cta.description': 'Join hundreds of successful retailers who trust us for their perfume wholesale needs. Get started with competitive pricing, authentic products, and comprehensive business support.',
      'productGros.cta.getPricing': 'Get Wholesale Pricing',
      'productGros.cta.callNow': 'Call Now: +213 671 38 91 13',
      
      // Footer
      'footer.company': 'Parfumerie Allouani',
      'footer.description': 'Your trusted partner for premium perfumes and luxury fragrances in Algeria.',
      'footer.quickLinks': 'Quick Links',
      'footer.contact': 'Contact',
      'footer.followUs': 'Follow Us',
      'footer.rights': '© 2024 Parfumerie Allouani. All rights reserved.',
    },
    fr: {
      // Navigation
      'nav.home': 'Accueil',
      'nav.perfumes': 'Parfums',
      'nav.productGros': 'Produits Gros',
      'nav.contact': 'Contact',
      'nav.shopNow': 'ACHETER MAINTENANT',
      
      // Hero Section
      'hero.badge': '✨ Magasin de Parfums Allouani - Un Voyage Magique de Parfum et d\'Élégance',
      'hero.title': 'Votre Voyage Parfumé Commence Ici',
      'hero.typewriter.premium': 'Monde Magique',
      'hero.typewriter.luxury': 'Parfums Uniques',
      'hero.typewriter.exotic': 'Parfums de Luxe',
      'hero.typewriter.designer': 'Mélanges Spéciaux',
      'hero.typewriter.signature': 'Musc et Oud',
      'hero.subtitle': 'Le magasin de parfums Allouani est l\'un des plus merveilleux magasins qui vous emmène dans un voyage magique de parfum et d\'élégance. C\'est un monde magique qui pulse avec les brises et les parfums uniques, où vous pouvez explorer une large gamme de fragrances luxueuses et raffinées.',
      'hero.shopPerfumes': 'Explorer les Parfums',
      'hero.viewCollections': 'Découvrir les Collections',
      
      // About Section
      'about.title': 'Équipe Dévouée d\'Experts et de Connaisseurs',
      'about.description': 'Vous trouverez chez nous une équipe dévouée d\'experts et de connaisseurs dans le monde des parfums, qui vous aident avec tout le professionnalisme et la gentillesse à choisir le parfum parfait qui convient à votre personnalité et reflète votre élégance unique. Choisir le bon parfum sera une expérience amusante et passionnante.',
      'about.shopButton': 'Découvrir Notre Expérience',
      
      // Services/Collections Section
      'services.title': 'Nos Collections Distinguées',
      'services.subtitle': 'Vous serez émerveillé par la magnificence des designs et la qualité des produits offerts par cette oasis parfumée. En plus de la collection distinguée de parfums, mélanges, musc et oud.',
      'services.qualityBadge': '✨ Qualité Authentique & Premium Garantie : Seulement des Produits Originaux avec Conseil Expert en Parfums',
      'services.luxuryPerfumes.title': 'Parfums de Luxe',
      'services.luxuryPerfumes.description': 'Une large gamme de fragrances luxueuses et raffinées offertes par cette oasis parfumée. Vous trouverez chez nous les meilleurs parfums des marques internationales.',
      'services.nicheFragrances.title': 'Mélanges Spéciaux',
      'services.nicheFragrances.description': 'Mélanges aromatiques uniques et distinctifs, musc et oud authentiques des meilleures sources. Parfums exclusifs pour une clientèle exigeante qui apprécie la qualité et l\'excellence.',
      'services.signatureCollections.title': 'Musc et Oud',
      'services.signatureCollections.description': 'Une collection soigneusement sélectionnée de musc et oud authentiques. Des parfums chauds aux senteurs rafraîchissantes, nous avons le parfum parfait pour chaque occasion.',
      'services.shopNow': 'Acheter Maintenant',
      'services.showcase.badge': '✨ Vitrine de Collection Premium',
      'services.showcase.title': 'Découvrez Notre Collection de Fragrances de Luxe',
      'services.showcase.description': 'Découvrez la plus belle sélection de parfums premium des marques mondialement reconnues. Chaque fragrance est soigneusement sélectionnée pour vous offrir l\'expérience olfactive de luxe ultime.',
      'services.showcase.shopNow': 'Acheter Maintenant',
      
      // Popular Section
      'popular.title': 'Nos parfums les plus populaires',
      'popular.mobileHint': 'Glissez à gauche ou à droite pour naviguer • Touchez et glissez pour faire défiler',
      'popular.discount': 'Remise {discount}%',
      
      // Contact Section
      'contact.title': 'Une Expérience Exceptionnelle Que Vous N\'Oublierez Jamais',
      'contact.description': 'À la fin de votre visite, vous quitterez le magasin avec un large sourire sur votre visage et un cœur reconnaissant plein de bonheur pour avoir découvert l\'essence unique de la beauté et de l\'élégance dans ce monde qui excite les sens. Il ne fait aucun doute que visiter notre magasin de parfums sera une expérience exceptionnelle que vous n\'oublierez jamais.',
      'contact.shopNow': 'Visitez-Nous Maintenant',
      
      // Contact Page
      'contactPage.badge': '✨ Parfums Premium & Fragrances de Luxe',
      'contactPage.title': 'Contactez Allouani Perfum',
      'contactPage.subtitle': 'Prêt à découvrir votre parfum signature parfait ? Contactez-nous pour explorer notre collection premium de fragrances de luxe. Nous sommes là pour vous aider à trouver le parfum idéal qui correspond à votre personnalité et votre style.',
      'contactPage.form.badge': '🛒 Formulaire de Commande Rapide',
      'contactPage.form.title': 'Commandez Votre Parfum',
      'contactPage.form.subtitle': 'Entrez vos détails, choisissez votre wilaya, et voyez le prix de livraison instantanément.',
      'contactPage.form.firstName': 'Prénom',
      'contactPage.form.firstNamePlaceholder': 'Entrez votre prénom',
      'contactPage.form.lastName': 'Nom de famille',
      'contactPage.form.lastNamePlaceholder': 'Entrez votre nom de famille',
      'contactPage.form.phone': 'Numéro de téléphone',
      'contactPage.form.phonePlaceholder': '+213 559 94 82 46',
      'contactPage.form.product': 'Produit',
      'contactPage.form.productPlaceholder': 'Nom du produit ou lien',
      'contactPage.form.quantity': 'Quantité',
      'contactPage.form.searchWilaya': 'Rechercher Wilaya',
      'contactPage.form.searchWilayaPlaceholder': 'Tapez le nom de la wilaya...',
      'contactPage.form.chooseWilaya': 'Choisissez Votre Wilaya',
      'contactPage.form.chooseWilayaPlaceholder': 'Sélectionnez votre wilaya',
      'contactPage.form.deliveryPrice': 'Prix de livraison : {price}',
      'contactPage.form.deliveryTime': 'Livraison estimée : {time}',
      'contactPage.form.placeOrder': '🛒 Passer Commande',
      'contactPage.form.sendingOrder': '⏳ Envoi de Votre Commande...',
      'contactPage.form.success.title': 'Message envoyé avec succès !',
      'contactPage.form.success.message': 'Nous vous répondrons dans les 24 heures.',
      'contactPage.form.error.title': 'Échec de l\'envoi du message',
      'contactPage.form.error.message': 'Veuillez réessayer ou nous contacter directement.',
      'contactPage.whyChoose.title': 'Pourquoi Choisir Allouani Perfum ?',
      'contactPage.whyChoose.expert': 'Consultants en parfums experts avec des années d\'expérience',
      'contactPage.whyChoose.authentic': 'Parfums premium authentiques des meilleures marques',
      'contactPage.whyChoose.personal': 'Correspondance et consultation de parfums personnalisés',
      'contactPage.whyChoose.delivery': 'Livraison nationale avec soin et expertise',
      'contactPage.cta.title': 'Prêt à Trouver Votre Parfum Signature ?',
      'contactPage.cta.description': 'Vous ne savez pas quel parfum vous convient ? Obtenez une consultation gratuite de 30 minutes en parfums — sans engagement.',
      'contactPage.cta.bookConsultation': '🌸 Réserver Consultation Gratuite en Parfums',
      'contactPage.cta.viewPerfumes': '🌸 Voir les Parfums',
      'contactPage.cta.support': 'Fragrances premium livrées dans tout le pays · Support WhatsApp 24/7',
      
      // Product Gros Section
      'productGros.badge': '🏪 Produits de Parfums en Gros',
      'productGros.title': 'Produits Gros - Vente en Gros',
      'productGros.subtitle': 'Découvrez nos collections exclusives de parfums en gros conçues pour les détaillants, boutiques et propriétaires d\'entreprises. Obtenez des prix de gros compétitifs, des produits authentiques et un support commercial complet.',
      'productGros.benefitsBadge': '🏢 Avantages du Gros : Prix de Gros • Support Commercial • Livraison Rapide',
      'productGros.contactWholesale': 'Contact pour Gros',
      'productGros.cta.badge': '🏢 Commencez Votre Business de Parfums Aujourd\'hui',
      'productGros.cta.title': 'Prêt à Commencer Votre Business de Parfums ?',
      'productGros.cta.description': 'Rejoignez des centaines de détaillants prospères qui nous font confiance pour leurs besoins de parfums en gros. Commencez avec des prix compétitifs, des produits authentiques et un support commercial complet.',
      'productGros.cta.getPricing': 'Obtenir Prix de Gros',
      'productGros.cta.callNow': 'Appeler Maintenant : +213 671 38 91 13',
      
      // Footer
      'footer.company': 'Parfumerie Allouani',
      'footer.description': 'Votre partenaire de confiance pour les parfums premium et les fragrances de luxe en Algérie.',
      'footer.quickLinks': 'Liens Rapides',
      'footer.contact': 'Contact',
      'footer.followUs': 'Suivez-nous',
      'footer.rights': '© 2024 Parfumerie Allouani. Tous droits réservés.',
    }
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

