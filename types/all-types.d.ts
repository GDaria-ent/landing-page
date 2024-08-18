
declare global {
    interface Menu {
        title: string;
        link: string;
    }
    interface Partners {
        link: string;
        logo: string;
    }
    interface CardInfo {
        icon: string;
        title: string;
        description: string;
    }

    interface Info {
        tag: string;
        title: string;
        description: string;
        advantages?: CardInfo[];
        image?: string;
    }
    interface Property {
        price?: string;
        location?: string;
        kitchen?: number;
        bedrooms?: number;
        area?: number;
    }
    interface Blog {
        tag: string;
        date: string;
        description: string;
    }
    interface ProductCard {
        image: string;
        title: string;
        link: string;
        property?: Property,
        blog?: Blog
    }

    interface Locations {
        title: string;
        link: string;
    }

    interface FooterMenu {
        title: string;
        pagesList:Locations[];
    }

    interface Feedback {
        score: number;
        text: string;
        name: string;
        image: string;
    }

}

export {};
