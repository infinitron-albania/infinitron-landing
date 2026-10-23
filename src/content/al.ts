import type {ContactType, TeamMember} from "../types/types.ts";
import {FaEnvelope, FaPhoneAlt} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";


export const al = {
    nav : [
        {label: 'Home', link: '/'},
        {label: 'Ekipi', link: '/team'},
        {label: 'Portofoli', link: '/projects'},
        {label: 'Kontakt', link: '/contact'},
    ],
    ui : {
        menu: 'Menu',
        switchLanguage: 'Ndrysho gjuhën',
    },
    hero : {
        title: 'INFINITRON',
        line1: 'Teknologjia në shërbim të biznesit',
    },
    about : {
        lead: 'Në ndihmë të biznesit, për t’i kthyer sfidat e përditshme në mundësi.',
        paragraphs: [
            'Tek Infinitron, fillojmë duke kuptuar si funksionon biznesi juaj: njerëzit, proceset dhe marrëdhëniet që e mbajnë në lëvizje. Më pas zhvillojmë dhe integrojmë teknologji për të thjeshtuar punën, për të përmirësuar qarkullimin e informacionit dhe për të mbështetur vendimmarrjen.',
            'Fokusi ynë është që teknologjia të sjellë vlerë në punën e përditshme, nga përmirësimi i proceseve të brendshme te bashkëpunimi më i mirë mes bizneseve, furnitorëve dhe institucioneve financiare.',
        ],
        actions: {
            approach: 'Njihuni me qasjen tonë',
            team: 'Bisedoni me ekipin',
        },
    },
    mission : {
        title: 'Misioni ynë',
        paragraphs: [
            'Misioni ynë është të ndihmojmë bizneset të përmirësojnë mënyrën si punojnë dhe të krijojnë mundësi të reja përmes teknologjisë që i shërben një qëllimi të qartë.',
            'Nisemi nga nevoja e biznesit. Çfarë e pengon të ecë përpara? Ku humbet kohë? Çfarë do t’i ndihmonte njerëzit të punonin më mirë? Këto pyetje udhëheqin zgjidhjet që zhvillojmë dhe teknologjitë që zgjedhim.',
            'Për ne, inovacioni ka vlerë kur zgjidh një problem real dhe sjell përmirësime të dobishme për njerëzit që e përdorin.',
        ],
        slogan: 'Biznesi përpara teknologjisë',
    },
    offer : {
        title: 'Çfarë ofrojmë?',
        paragraphs: [
            'Zhvillojmë dhe integrojmë teknologji duke u mbështetur te mënyra si funksionon biznesi. Puna jonë nis me kuptimin e qartë të sfidës dhe me vlerësimin praktik të asaj që mund të përmirësohet.',
        ],
        services: [
            {
                title: 'Zgjidhje digjitale dhe integrim',
                text: 'Zhvillojmë mjete digjitale dhe lidhim sisteme që informacioni të gjendet, të ndahet dhe të përdoret më lehtë në aktivitetet e biznesit.',
            },
            {
                title: 'Përmirësim i proceseve',
                text: 'Analizojmë proceset e përditshme për të identifikuar detyrat e përsëritura, mangësitë në koordinim dhe mundësitë për të përdorur më mirë kohën dhe burimet.',
            },
            {
                title: 'Bashkëpunim mes bizneseve',
                text: 'Projektojmë zgjidhje që mbështesin shkëmbimin e informacionit dhe koordinimin mes bizneseve, furnitorëve dhe institucioneve financiare.',
            },
        ],
        philosophyTitle: 'Qasja jonë',
        steps: [
            {
                title: 'Kuptojmë sfidën',
                text: 'Dëgjojmë njerëzit që e kryejnë punën dhe shqyrtojmë pengesat me të cilat përballen çdo ditë.',
            },
            {
                title: 'Identifikojmë mundësinë',
                text: 'Vlerësojmë ku teknologjia mund të sjellë vlerë dhe përcaktojmë përparësitë sipas nevojave dhe objektivave të biznesit.',
            },
            {
                title: 'Ndërtojmë zgjidhjen',
                text: 'Zhvillojmë dhe integrojmë mjete me një qëllim të qartë, duke pasur në fokus lehtësinë e përdorimit dhe nevojat e punës së përditshme.',
            },
            {
                title: 'Ecim përpara së bashku',
                text: 'Bashkëpunojmë me bizneset dhe partnerët përmes dialogut të hapur, objektivave të qarta dhe hapave konkretë.',
            },
        ],
    },
    industries : {
        title: 'Me kë bashkëpunojmë?',
        intro:
            'Fokusi ynë bashkon biznese dhe institucione, aktivitetet e të cilave lidhen ngushtë me njëri-tjetrin. Shqyrtojmë nevojat e secilit grup dhe mundësitë për të përmirësuar bashkëpunimin mes tyre.',
        items: [
            {
                title: 'Prodhues dhe furnitorë',
                text: 'Informacioni i qartë dhe koordinimi i mirë janë thelbësorë për marrëdhënie të qëndrueshme tregtare. Përqendrohemi te proceset që lidhin prodhuesit dhe furnitorët me bizneset që ata furnizojnë, duke identifikuar mundësi për komunikim më të mirë dhe veprimtari më efikase.',
            },
            {
                title: 'Biznese të tregtisë me pakicë dhe të mikpritjes',
                text: 'Marketet e pavarura, kafenetë dhe bizneset e tjera lokale përballen çdo ditë me shumë kërkesa. Përqendrohemi te mjetet praktike që i ndihmojnë pronarët të organizojnë punën, të kenë një pasqyrë të qartë të aktivitetit dhe të koordinohen më mirë me furnitorët.',
            },
            {
                title: 'Banka dhe institucione financiare',
                text: 'Informacioni i besueshëm dhe proceset e organizuara mbështesin vendimmarrjen e informuar. Shqyrtojmë si mund të përmirësojnë zgjidhjet digjitale komunikimin dhe koordinimin mes institucioneve financiare dhe bizneseve që ato u shërbejnë.',
            },
        ],
    },
    insights : {
        title: 'Ide dhe analiza',
        paragraphs: [
            'Ndajmë këndvështrime mbi biznesin, teknologjinë dhe ndryshimet që ndikojnë në mënyrën si punojnë kompanitë.',
            'Artikujt dhe analizat tona trajtojnë zbatime praktike, mundësi të reja dhe pyetje që bizneset duhet të shqyrtojnë përpara se të adoptojnë një teknologji. Synojmë t’i bëjmë këto zhvillime më të kuptueshme dhe më të lehta për t’u vlerësuar në raport me nevojat reale të biznesit.',
        ],
        button: 'Lexoni idetë dhe analizat tona',
    },
    contact : {
        title: 'Kontakt',
        tagline: 'Le të flasim për biznesin tuaj',
        text: 'Na tregoni sfidat me të cilat përballeni dhe çfarë dëshironi të përmirësoni. Së bashku mund të shqyrtojmë ku mund t’ju ndihmojë teknologjia dhe cili mund të jetë hapi i ardhshëm praktik.',
        button: 'Na kontaktoni',
        phone: '069 606 9500',
        phoneHref: '+355696069500',
        callLabel: 'Telefononi',
        contactTypes: [
            {
                title: 'Email',
                recap: 'info@infinitron.al',
                description: 'Na shkruani për çdo pyetje ose kërkesë',
                icon: FaEnvelope,
            },
            {
                title: 'Adresa',
                recap: 'Tiranë, Shqiperi',
                description: 'Jemi në zemër të inovacionit dhe teknologjisë',
                icon: FaLocationDot,
            },
            {
                title: 'Telefon',
                recap: '+355 69 606 9500',
                description: 'Na telefononi',
                icon: FaPhoneAlt,
            },
        ] as ContactType[],
    },
     team : {
        titleLine1: 'Ekipi i',
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
                photo: 'images/team/ervis.webp',
                linkedin: 'https://www.linkedin.com/in/ervis-mance-77173018',
                email: 'ervis.mance@infinitron.al',
            },
            {
                name: 'Greta Allushi',
                role: 'Specialiste e PR & Komunikimit',
                bio: 'Një ide e mirë ka nevojë për komunikimin e duhur që të kuptohet, të krijojë lidhje dhe të fitojë besim. Përvoja ime në media, komunikim publik dhe marketing digjital më ka ndihmuar të kuptoj se si një mesazh mund të kthehet në një identitet të dallueshëm.\n' +
                    'Në Infinitron, kujdesem që vizioni dhe zgjidhjet tona teknologjike të komunikohen në mënyrë të qartë, krijuese dhe të afërt me bizneset. Qëllimi im është të ndërtoj një komunikim që jo vetëm prezanton atë që bëjmë, por e bën të kuptueshme vlerën që sjellim.\n' +
                    'Sepse një markë e fortë nuk dallohet vetëm nga ajo që ofron, por edhe nga mënyra se si komunikon dhe lidh njerëzit me vizionin e saj.\n',
                photo: 'images/team/greta.webp',
                linkedin: '#',
                email: 'greta.allushi@infinitron.al',
            },
            {
                name: 'David Luka',
                role: 'Web & Creative Designer Officer',
                bio: 'Dizajni është më shumë sesa pamja vizuale: është mënyra se si një ide bëhet e kuptueshme dhe një përvojë digjitale funksionon natyrshëm. Formimi im në Menaxhim Komunikimi, me fokus në Branding, Reklama dhe Marrëdhënie me Publikun, në Universitetin e Wrocław-it në Poloni, si dhe përvojat akademike në Gjermani dhe Portugali, kanë formësuar qasjen time krijuese.\n' +
                    'Në punën time, ndërthur estetikën, strategjinë dhe funksionalitetin për të krijuar identitete vizuale dhe zgjidhje digjitale që i përgjigjen nevojave të përdoruesve.\n' +
                    'Rezultati që synoj është një teknologji që nuk është vetëm moderne në pamje, por edhe intuitive, e dobishme dhe e lehtë për t\'u përdorur.\n',
                photo: 'images/team/dejv.webp',
                linkedin: 'https://www.linkedin.com/in/davidluka4',
                email: 'david.luka@infinitron.al',
            },
            {
                name: 'Stiven Gjinaj',
                role: 'Software Developer',
                bio: 'Më tërheq zhvillimi i softuerit dhe krijimi i zgjidhjeve digjitale që i kthejnë idetë në funksionalitete konkrete. Përvoja ime përfshin zhvillimin e platformave web full stack, si dhe punën me inteligjencën artificiale dhe analizën e të dhënave.\n' +
                    'Në Infinitron, kontribuoj në projektimin dhe zhvillimin e platformës softuerike, nga arkitektura e sistemit dhe planifikimi i zgjidhjeve teknike, deri te shndërrimi i kërkesave të biznesit në funksionalitete praktike.\n' +
                    'Për mua, një zgjidhje e mirë teknologjike duhet të jetë e menduar me kujdes, funksionale dhe e ndërtuar për t’iu përgjigjur nevojave reale të përdoruesve.\n',
                photo: 'images/team/stiven.webp',
                linkedin: 'https://www.linkedin.com/in/stiven-gjinaj-835134161',
                email: 'stiven.gjinaj@infinitron.al',
            },
            {
                name: 'Lapo',
                role: 'Enthusiastic Officer',
                bio: 'Në vitin e pestë të jetës, Lapo ka vendosur të provojë edhe punën. Labradori ynë ngjyrë çokollate i bashkohet Infinitron si Enthusiastic Officer, me përgjegjësi të qarta: të mbajë entuziazmin lart, stresin poshtë dhe të mos lërë askënd pa përshëndetur.\n' +
                    'Një burim i pashtershëm frymëzimi dhe antistresi, Lapo na kujton se edhe sfidat më të mëdha përballohen më lehtë me pak lojë dhe një shëtitje. Nuk shkruan kod dhe nuk merret me buxhete, por është gjithmonë i gatshëm të marrë meritat kur ekipi ndihet mirë.\n' +
                    'Pagën e negocion në biskota. Përkëdheljet janë pjesë e paketës së përfitimeve.\n',
                photo: 'images/team/lapo.webp',
            }

        ] as TeamMember[],
        footer: {
            small: 'Së bashku për',
            big: 'Një të ardhme më të mirë',
        },
    },
    portfolio: {
        title: 'Së shpejti',
        text: 'Portofolin ynë do të jetë gati së shpejti.',
        back: 'Kthehu në faqen kryesore',
    },
    notFound: {
        title: 'Faqja nuk u gjet',
        text: 'Faqja që po kërkoni nuk ekziston ose është zhvendosur.',
        back: 'Kthehu në faqen kryesore',
    },
}

export type Content = typeof al
