import type {TeamMember} from "../types/types.ts";


export const en = {
    nav : [
        {label: 'Home', link: '/'},
        {label: 'Team', link: '/team'},
        {label: 'Projects', link: '/projects'},
        {label: 'Contact', link: '/contact'},
    ],
    ui : {
        menu: 'Menu',
        switchLanguage: 'Ndrysho gjuhën',
    },
    hero : {
        title: 'INFINITRON',
        line1: 'Technology at the Service of Business',
    },
    about : {
        lead: 'We help businesses turn everyday challenges into opportunities through practical technology solutions.',
        paragraphs: [
            'At Infinitron, we start by understanding how your business works: the people, processes and relationships behind it. We then develop and integrate technology to simplify operations, improve the flow of information and support better decisions.',
            'Our focus is on making technology useful in everyday business, from improving internal workflows to enabling closer collaboration between businesses, suppliers and financial institutions.',
        ],
        actions: {
            approach: 'Explore our approach',
            team: 'Talk to our team',
        },
    },
    mission : {
        title: 'Our Mission',
        paragraphs: [
            'Our mission is to help businesses strengthen their operations and create new opportunities through technology that serves a clear purpose.',
            'We begin with the business need. What is slowing progress? Where is time being lost? What would help people work more effectively? These questions guide the solutions we develop and the technologies we choose.',
            'For us, innovation earns its place by solving a real problem and making a useful difference to the people who use it.',
        ],
        slogan: 'Business Before Technology',
    },
    offer : {
        title: 'What We Offer?',
        paragraphs: [
            'We develop and integrate technology around the way businesses operate. Our work begins with a clear understanding of the challenge and a practical view of what can be improved.',
        ],
        services: [
            {
                title: 'Digital Solutions and Integration',
                text: 'We develop digital tools and connect systems to make information easier to access, share and use across business activities.',
            },
            {
                title: 'Process Improvement',
                text: 'We analyse day-to-day workflows to identify repetitive tasks, gaps in coordination and opportunities to use time and resources more effectively.',
            },
            {
                title: 'Business Collaboration',
                text: 'We design solutions that support the exchange of information and coordination between businesses, suppliers and financial institutions.',
            },
        ],
        philosophyTitle: 'Our Approach',
        steps: [
            {
                title: 'Understand the challenge',
                text: 'We listen to the people doing the work and examine the obstacles they face every day.',
            },
            {
                title: 'Identify the opportunity',
                text: 'We assess where technology can add value and define priorities around the business’s needs and objectives.',
            },
            {
                title: 'Build the solution',
                text: 'We develop and integrate tools with a clear purpose, keeping usability and everyday operations in focus.',
            },
            {
                title: 'Move forward together',
                text: 'We work with businesses and partners through open dialogue, clear objectives and practical next steps.',
            },
        ],
    },
    industries : {
        title: 'Who We Work With?',
        intro:
            'Our focus brings together businesses and institutions whose activities are closely connected. We look at the needs of each group and the opportunities to improve how they work with one another.',
        items: [
            {
                title: 'Producers and Suppliers',
                text: 'Clear information and effective coordination are essential to strong trading relationships. We focus on the processes that connect producers and suppliers with the businesses they serve, helping identify opportunities for better communication and more efficient operations.',
            },
            {
                title: 'Retail and Hospitality Businesses',
                text: 'Independent shops, cafés and other local businesses manage a wide range of daily demands. We focus on practical tools that help owners organise their work, maintain visibility over operations and coordinate more effectively with suppliers.',
            },
            {
                title: 'Banks and Financial Institutions',
                text: 'Reliable information and well-organised processes support informed decisions. We explore how digital solutions can improve communication and coordination between financial institutions and the businesses they serve.',
            },
        ],
    },
    insights : {
        title: 'Insights',
        paragraphs: [
            'We share perspectives on business, technology and the changes shaping the way companies operate.',
            'Our articles and analyses examine practical applications, emerging opportunities and the questions businesses should consider before adopting new technology. The aim is to make developments easier to understand and assess in the context of real business needs.',
        ],
        button: 'Explore our insights',
    },
    contact : {
        title: 'Contact',
        tagline: 'Let’s Talk About Your Business',
        text: 'Tell us about the challenges you face and what you want to improve. We can explore where technology could help and what a practical next step might look like.',
        button: 'Get in touch',
        form: {
            name: 'Emri',
            email: 'Email',
            company: 'Kompania (opsionale)',
            message: 'Mesazhi',
            send: 'Dërgo mesazhin',
            sending: 'Duke dërguar...',
            success: 'Faleminderit! Mesazhi u dërgua, do t\'ju kontaktojmë së shpejti.',
            error: 'Diçka shkoi keq. Ju lutemi provoni përsëri.',
        },
        details: [
            { label: 'Email', value: 'info@infinitron.al' },
            { label: 'Telefon', value: '+355 00 000 0000' },
            { label: 'Adresa', value: 'Tiranë, Shqipëri' },
        ],
    },
    team : {
        titleLine1: 'Ekipi i',
        titleLine2: 'Infinitron',
        intro:
            'Një ekip i përkushtuar, me pasion për teknologjinë, që punon së bashku për të ndërtuar zgjidhje inovative dhe me ndikim real.',
        members: [
            {
                name: 'Ervis Mance',
                role: 'Co-Founder & CEO',
                bio: 'My experience in entrepreneurship, business leadership, and the public sector has shown me that technology creates real value when it addresses practical challenges and opens new paths for growth.\n' +
                    'With Infinitron, my goal is to build a company that helps businesses work more efficiently, improve their processes, and make the most of what technology has to offer.\n' +
                    'To me, success is not just about the solution we create, but the difference it makes to the way a business operates.',
                photo: './team/ervis.png',
                linkedin: '#',
                email: 'ervis@infinitron.al',
            },
            {
                name: 'Greta Allushi',
                role: 'PR & Communications Specialist',
                bio: 'A good idea needs the right communication to be understood, build connections, and earn trust. My experience in media, public communication, and digital marketing has helped me understand how a message can become a distinctive identity.\n' +
                    'At Infinitron, I ensure that our vision and technology solutions are communicated clearly, creatively, and in a way that resonates with businesses. My goal is to build communication that not only presents what we do, but also makes the value we deliver easy to understand.\n' +
                    'Because a strong brand is defined not only by what it offers, but also by how it communicates and connects people with its vision.',
                photo: './team/greta.png',
                linkedin: '#',
                email: 'greta@infinitron.al',
            },
            {
                name: 'David Luka',
                role: 'Web & Creative Designer Officer',
                bio: 'Design is about more than visual appearance: it is how an idea becomes understandable and a digital experience feels intuitive. My academic background in Communication Management, with a focus on Branding, Advertising, and Public Relations at the University of Wrocław in Poland, along with academic experiences in Germany and Portugal, has shaped my creative approach.\n' +
                    'In my work, I bring together aesthetics, strategy, and functionality to create visual identities and digital solutions that meet users’ needs.\n' +
                    'My aim is to create technology that is not only modern in appearance, but also intuitive, useful, and easy to use.',
                photo: './team/dejv.png',
                linkedin: '#',
                email: 'david@infinitron.al',
            },
            {
                name: 'Stiven Gjinaj',
                role: 'Software Developer',
                bio: 'I am passionate about software development and creating digital solutions that turn ideas into practical functionality. My experience includes full-stack web platform development, as well as working with artificial intelligence and data analysis.\n' +
                    'At Infinitron, I contribute to the design and development of the software platform, from system architecture and technical planning to turning business requirements into practical features.\n' +
                    'To me, a good technology solution should be carefully designed, functional, and built to meet users’ real needs.\n',
                photo: './team/stiven.png',
                linkedin: '#',
                email: 'stiven@infinitron.al',
            },
            {
                name: 'Lapo',
                role: 'Enthusiastic Officer',
                bio: 'Now in his fifth year of life, Lapo has decided to give working a try. Our chocolate Labrador joins Infinitron as Enthusiastic Officer with a clear brief: keep spirits high, stress levels low, and make sure everyone gets a proper welcome.\n' +
                    'An endless source of inspiration and stress relief, Lapo reminds us that even the biggest challenges feel more manageable after a little play and a good walk. He doesn’t write code or handle budgets, but he’s always happy to take the credit when the team is in a good mood.\n' +
                    'His salary is negotiated in treats. Belly rubs are part of the benefits package.\n',
                photo: './team/lapo.png',
            }

        ] as TeamMember[],
        footer: {
            small: 'Së bashku për',
            big: 'Një të ardhme më të mirë',
        },
    }
}

export type Content = typeof en
