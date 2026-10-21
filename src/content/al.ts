import type {TeamMember} from "../types/types.ts";

export const nav = [
    {label: 'Home', link: '/'},
    {label: 'Ekipi', link: '/ekipi'},
    {label: 'Projektet', link: '/projektet'},
    {label: 'Kontakt', link: '/kontakt'},
]

export const hero = {
    title: 'INFINITRON',
    line1: 'Teknologji me vizion, zgjidhje me vlerë.',
    // line2: 'Transformojmë teknologjinë në mundësi!',
}

export const about = {
    paragraphs: [
        'Teknologjia duhet ta bëjë biznesin më të thjeshtë, jo më të komplikuar. Infinitron është një kompani teknologjie që synon të ndihmojë bizneset të zhvillohen, të modernizohen dhe të përballojnë sfidat e tregut përmes zgjidhjeve praktike dhe inovative.',
        'Ne besojmë se çdo zgjidhje e mirë nis nga njohja e nevojave reale të biznesit. Prandaj, fokusohemi te digjitalizimi, përmirësimi i proceseve të përditshme dhe krijimi i mundësive të reja për bashkëpunim mes bizneseve, furnitorëve dhe institucioneve financiare. Infinitron është një kompani e fokusuar në teknologji, ku definicioni i saj është shkurtimi i kostove për biznesin ose optimizimi i kohës së punës. Teknologjia kthehet në vlerë për biznesin, kur nis nga problemet reale dhe jep zgjidhje efikase dhe të shpejta për nevojat e krijuara.'
    ],
}

export const mission = {
    title: 'Misioni ynë!',
    paragraphs: [
        'Misioni ynë lidhet qartë me ndihmën që i japim biznesit për të shfrytëzuar potencialin e tyre përmes teknologjisë dhe inovacionit. Por, në fokus të misionit tonë do të kemi biznesin përpara teknologjisë.',
        'Business, Before Technology përfaqëson mënyrën se si e kuptojmë këtë përgjegjësi: fillimisht biznesi, më pas teknologjia që i shërben atij. Dhe pikërisht këtë ofron Infinitron.'
    ],
    slogan: 'Business, Before Technology',
}

export const offer = {
    title: 'Çfarë ofrojmë?',
    paragraphs: [
        'Çdo biznes ka mënyrën e vet të funksionimit, sfidat dhe objektivat e tij. Dhe pikërisht këtu fokusohet Infinitron, për t’i identifikuar këto nevoja konkrete dhe më pas për t’i ofruar zgjidhjen si një përgjigje që vetëm teknologjia mund ta japë. Për ne, një zgjidhje ka kuptim kur i përgjigjet një nevoje reale dhe kontribuon në objektivat e biznesit.',
        'Qasja jonë nis nga proceset, marrëdhëniet dhe informacioni që mbështet aktivitetin e përditshëm të biznesit. Duke analizuar mënyrën si ndërveprojnë këta elementë, ne identifikojmë mundësi për optimizim, koordinim më të mirë dhe përdorim më efikas të burimeve.'
    ],
    philosophyTitle: 'Filozofia jonë',
    steps: [
        {
            title: 'Kuptojmë problemin.',
            text: 'Dëgjojmë njerëzit që përballen çdo ditë me sfidat e tregut.',
        },
        {
            title: 'Analizojmë mundësitë.',
            text: 'Identifikojmë problemet që meritojnë zgjidhje dhe mundësitë ku teknologjia mund të sjellë vlerë të shtuar.',
        },
        {
            title: 'Ndërtojmë zgjidhje.',
            text: 'Në bazë të ekspertizës teknologjike, zhvillojmë dhe integrojmë zgjidhje të orientuara drejt nevojave konkrete.',
        },
        {
            title: 'Bashkëpunojmë për të ecur përpara.',
            text: 'Krijojmë hapësirë për dialog me bizneset dhe partnerët, duke synuar marrëdhënie që zhvillohen përmes objektivave të qarta dhe hapave konkretë.',
        },
    ],
}

export const industries = {
    title: 'Industritë që mbështesim!',
    intro:
        'Çdo industri ka sfidat e veta dhe nevojat e biznesit janë pikënisja jonë. Infinitron merr në konsideratë realitetin e secilës industri. Kuptimi i procesve, problematikave dhe sfidave specifike na ndihmon të dallojmë se ku mund të krijohet vlerë dhe ku ekziston mundësia për përmirësim.',
    items: [
        {
            title: 'Prodhuesit dhe furnitorët',
            text: 'Një ekosistem ku koordinimi i zinxhirit të furnizimit, qarkullimi i informacionit dhe menaxhimi i marrëdhënieve tregtare janë thelbësore!',
        },
        {
            title: 'Operatorët',
            text: 'Marketet dhe baret-kafenetë, me nevojat dhe sfidat e tyre të përditshme! Fokusi ynë mbetet te mënyra si funksionojnë këto biznese, duke kuptuar më mirë vështirësitë e tyre operative dhe mundësitë për përmirësim.',
        },
        {
            title: 'Institucionet financiare',
            text: 'Një sektor ku organizimi i informacionit, menaxhimi i proceseve dhe cilësia e informacionit të përdorur në vendimmarrje kanë rëndësi të veçantë.',
        },
    ],
}

export const contact = {
    title: 'Kontakt!',
    tagline: 'Infinitron — Nga nevoja reale te zgjidhja teknologjike.',
    text: 'Na kontaktoni për të nisur një bisedë mbi biznesin tuaj dhe mundësitë e bashkëpunimit.',
    button: 'Na kontaktoni',
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
}

export const team = {
    titleLine1: 'Njerëzit pas',
    titleLine2: 'Infinitron',
    intro:
        'Një ekip i përkushtuar, me pasion për teknologjinë, që punon së bashku për të ndërtuar zgjidhje inovative dhe me ndikim real.',
    members: [
        {
            name: 'Ervis Mance',
            role: 'Bashkthemelues & CEO',
            bio: 'Përvoja ime në sipërmarrje, drejtim biznesi dhe sektorin publik më ka treguar se teknologjia merr vlerë të vërtetë kur u përgjigjet sfidave konkrete dhe hap rrugë të reja për zhvillim.\n' +
                'Me Infinitron, synoj të ndërtoj një kompani që i ndihmon bizneset të punojnë më me efikasitet, të përmirësojnë proceset dhe të shfrytëzojnë potencialin që ofron teknologjia.\n' +
                'Për mua, suksesi nuk qëndron vetëm te zgjidhja që krijojmë, por te ndryshimi që ajo sjell në mënyrën se si funksionon një biznes.\n',
            photo: './team/ervis.png',
            linkedin: '#',
            email: 'ervis@infinitron.al',
        },
        {
            name: 'Greta Allushi',
            role: 'Specialiste e PR & Komunikimit',
            bio: 'Një ide e mirë ka nevojë për komunikimin e duhur që të kuptohet, të krijojë lidhje dhe të fitojë besim. Përvoja ime në media, komunikim publik dhe marketing digjital më ka ndihmuar të kuptoj se si një mesazh mund të kthehet në një identitet të dallueshëm.\n' +
                'Në Infinitron, kujdesem që vizioni dhe zgjidhjet tona teknologjike të komunikohen në mënyrë të qartë, krijuese dhe të afërt me bizneset. Qëllimi im është të ndërtoj një komunikim që jo vetëm prezanton atë që bëjmë, por e bën të kuptueshme vlerën që sjellim.\n' +
                'Sepse një markë e fortë nuk dallohet vetëm nga ajo që ofron, por edhe nga mënyra se si komunikon dhe lidh njerëzit me vizionin e saj.\n',
            photo: '/team/greta.jpg',
            linkedin: '#',
            email: 'greta@infinitron.al',
        },
        {
            name: 'David Luka',
            role: 'Web & Creative Designer Officer',
            bio: 'Dizajni është më shumë sesa pamja vizuale: është mënyra se si një ide bëhet e kuptueshme dhe një përvojë digjitale funksionon natyrshëm. Formimi im në Menaxhim Komunikimi, me fokus në Branding, Reklama dhe Marrëdhënie me Publikun, në Universitetin e Wrocław-it në Poloni, si dhe përvojat akademike në Gjermani dhe Portugali, kanë formësuar qasjen time krijuese.\n' +
                'Në punën time, ndërthur estetikën, strategjinë dhe funksionalitetin për të krijuar identitete vizuale dhe zgjidhje digjitale që i përgjigjen nevojave të përdoruesve.\n' +
                'Rezultati që synoj është një teknologji që nuk është vetëm moderne në pamje, por edhe intuitive, e dobishme dhe e lehtë për t\'u përdorur.\n',
            photo: '/team/david.jpg',
            linkedin: '#',
            email: 'david@infinitron.al',
        },
        {
            name: 'Stiven Gjinaj',
            role: 'Software Developer',
            bio: 'Më tërheq zhvillimi i softuerit dhe krijimi i zgjidhjeve digjitale që i kthejnë idetë në funksionalitete konkrete. Përvoja ime përfshin zhvillimin e platformave web full stack, si dhe punën me inteligjencën artificiale dhe analizën e të dhënave.\n' +
                'Në Infinitron, kontribuoj në projektimin dhe zhvillimin e platformës softuerike, nga arkitektura e sistemit dhe planifikimi i zgjidhjeve teknike, deri te shndërrimi i kërkesave të biznesit në funksionalitete praktike.\n' +
                'Për mua, një zgjidhje e mirë teknologjike duhet të jetë e menduar me kujdes, funksionale dhe e ndërtuar për t’iu përgjigjur nevojave reale të përdoruesve.\n',
            photo: '/team/stiven.jpg',
            linkedin: '#',
            email: 'stiven@infinitron.al',
        }

    ] as TeamMember[],
    footer: {
        small: 'Së bashku për',
        big: 'Një të ardhme më të mirë',
    },
}