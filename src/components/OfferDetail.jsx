import React from 'react';
import { useParams } from 'react-router-dom';
import './OfferDetail.css';
import { TbDental } from "react-icons/tb";

const offerDetails = {
    "protheses-dentaires": {
        title: {
            fr: "Prothèses dentaires",
            ar: "الأطقم السنية"
        },
        description: {
            fr: `
                Les prothèses dentaires sont des dispositifs conçus pour remplacer les dents manquantes et restaurer la fonction et l'apparence de votre sourire. 
                Nous proposons plusieurs types de prothèses, y compris les prothèses complètes, partielles, et amovibles. 
                Les prothèses complètes sont utilisées lorsque toutes les dents sont manquantes, tandis que les prothèses partielles sont adaptées lorsque seules certaines dents sont absentes. 
                Les prothèses amovibles offrent une flexibilité supplémentaire et peuvent être retirées pour le nettoyage et le confort.
                Il est important de bien entretenir vos prothèses pour éviter les infections et garantir leur longévité. Nos experts vous fourniront des conseils personnalisés sur le nettoyage et les ajustements nécessaires pour un confort optimal.`,
            ar: `
                الأطقم السنية هي أجهزة مصممة لاستبدال الأسنان المفقودة واستعادة وظيفة ومظهر ابتسامتك.
                نقدم أنواعًا متعددة من الأطقم، بما في ذلك الأطقم الكاملة، الجزئية، والقابلة للإزالة.
                تُستخدم الأطقم الكاملة عندما تكون جميع الأسنان مفقودة، بينما تُناسب الأطقم الجزئية عندما تكون بعض الأسنان فقط مفقودة.
                الأطقم القابلة للإزالة توفر مرونة إضافية ويمكن إزالتها للتنظيف والراحة.
                من المهم العناية الجيدة بطقمك لتجنب الالتهابات وضمان طول عمره. سيقدم لك خبراؤنا نصائح مخصصة حول التنظيف والتعديلات اللازمة لراحة مثلى.`,
        },
        videoUrl: "https://www.youtube.com/watch?v=s504Wlv874w&list=PLkshgX1LcJhHtT1HNsWZvxbhPv1z6AWXz&index=84" // Replace with actual video URL
    },
    "couronnes-dentaires": {
        title: {
            fr: "Couronnes dentaires",
            ar: "التاج السني"
        },
        description: {
            fr: `
                Les couronnes dentaires sont des restaurations utilisées pour couvrir complètement une dent endommagée ou décolorée. 
                Elles sont fabriquées à partir de matériaux tels que la céramique, le métal-céramique, ou le zirconium, offrant à la fois durabilité et esthétique.
                Les couronnes en céramique sont idéales pour les dents visibles en raison de leur apparence naturelle. 
                Les couronnes métal-céramique sont souvent utilisées pour les dents postérieures, offrant une résistance accrue aux forces de mastication. 
                Le zirconium est un matériau hautement durable et esthétique qui imite parfaitement la dent naturelle. 
                Il est crucial de bien entretenir les couronnes pour éviter les problèmes de gencives et garantir leur longévité.`,
            ar: `
                التيجان السنية هي ترميمات تُستخدم لتغطية الأسنان التالفة أو المتغيرة اللون بالكامل.
                تُصنع التيجان من مواد مثل السيراميك، المعدن-السيراميك، أو الزركونيوم، مما يوفر كلاً من المتانة والجمالية.
                التيجان السيراميكية مثالية للأسنان المرئية بسبب مظهرها الطبيعي.
                التيجان المعدن-السيراميك غالبًا ما تُستخدم للأسنان الخلفية، مما يوفر مقاومة إضافية لقوى المضغ.
                الزركونيوم هو مادة ذات متانة عالية وجمالية تُقلد تمامًا الأسنان الطبيعية.
                من الضروري العناية الجيدة بالتيجان لتجنب مشاكل اللثة وضمان طول عمرها.`,
        },
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video URL
    },
    "bridges-dentaires": {
        title: {
            fr: "Bridges dentaires",
            ar: "الجسور السنية"
        },
        description: {
            fr: `
                Les bridges dentaires sont des dispositifs utilisés pour remplacer une ou plusieurs dents manquantes en reliant les dents adjacentes. 
                Ils se composent généralement de trois parties : les couronnes pour les dents voisines et le pont qui comble l'espace vide. 
                Les bridges peuvent être fixés de manière permanente ou amovible selon les besoins du patient. 
                Il est essentiel de maintenir une bonne hygiène bucco-dentaire autour des bridges pour prévenir les caries et les infections.`,
            ar: `
                الجسور السنية هي أجهزة تُستخدم لاستبدال سن واحدة أو أكثر مفقودة من خلال ربط الأسنان المجاورة.
                تتكون الجسور عادة من ثلاث أجزاء: التيجان للأسنان المجاورة والجسر الذي يملأ الفراغ.
                يمكن أن تكون الجسور مثبتة بشكل دائم أو قابل للإزالة حسب احتياجات المريض.
                من الضروري الحفاظ على نظافة الفم الجيدة حول الجسور لمنع التسوس والالتهابات.`,
        },
        videoUrl: "https://www.youtube.com/watch?v=V5sOfs_R0AA&list=PLkshgX1LcJhHtT1HNsWZvxbhPv1z6AWXz&index=15" // Replace with actual video URL
    },
    "facettes-dentaires": {
        title: {
            fr: "Facettes dentaires",
            ar: "القشور السنية"
        },
        description: {
            fr: `
                Les facettes dentaires sont des coques minces en céramique ou en composite collées à la surface des dents pour améliorer leur apparence. 
                Elles sont souvent utilisées pour corriger les imperfections esthétiques telles que les dents décolorées, ébréchées, ou mal alignées. 
                Les facettes offrent une solution rapide et efficace pour améliorer le sourire tout en préservant la structure dentaire naturelle. 
                Il est recommandé de consulter un professionnel pour évaluer vos besoins et choisir le type de facettes le mieux adapté.`,
            ar: `
                القشور السنية هي قشور رقيقة من السيراميك أو المواد المركبة تُلصق على سطح الأسنان لتحسين مظهرها.
                تُستخدم غالبًا لتصحيح العيوب الجمالية مثل الأسنان المتغيرة اللون، أو المتشققة، أو غير المستقيمة.
                توفر القشور حلاً سريعًا وفعالًا لتحسين الابتسامة مع الحفاظ على البنية الطبيعية للأسنان.
                يُوصى باستشارة متخصص لتقييم احتياجاتك واختيار نوع القشور الأنسب.`,
        },
        videoUrl: "https://www.youtube.com/watch?v=cQgpHufB-5k&list=PLkshgX1LcJhHtT1HNsWZvxbhPv1z6AWXz&index=5" // Replace with actual video URL
    },
    "inlays-onlays": {
        title: {
            fr: "Inlays et onlays",
            ar: "الترميمات الداخلية والخارجية"
        },
        description: {
            fr: `
                Les inlays et onlays sont des restaurations dentaires utilisées pour réparer les dents endommagées par des caries ou des fractures. 
                Ils sont fabriqués en laboratoire à partir de matériaux tels que la céramique ou le composite, et sont ensuite collés sur la dent. 
                Les inlays sont utilisés pour remplir des cavités dans la dent, tandis que les onlays couvrent une plus grande surface. 
                Ces restaurations sont souvent préférées aux obturations traditionnelles en raison de leur durabilité et de leur apparence esthétique.`,
            ar: `
                الترميمات الداخلية والخارجية هي ترميمات سنية تُستخدم لإصلاح الأسنان التالفة بسبب التسوس أو الكسور.
                تُصنع في المختبر من مواد مثل السيراميك أو المواد المركبة، ثم تُلصق على الأسنان.
                تُستخدم الترميمات الداخلية لملء التجاويف في الأسنان، بينما تغطي الترميمات الخارجية مساحة أكبر.
                تُفضل هذه الترميمات غالبًا على الحشوات التقليدية بسبب متانتها ومظهرها الجمالي.`,
        },
        videoUrl: "https://www.youtube.com/watch?v=b8UjyxcEvWI&list=PLkshgX1LcJhHtT1HNsWZvxbhPv1z6AWXz&index=46" // Replace with actual video URL
    },
    "appareils-orthodontiques": {
        title: {
            fr: "Appareils orthodontiques",
            ar: "الأجهزة التقويمية"
        },
        description: {
            fr: `
                Les appareils orthodontiques sont utilisés pour corriger les problèmes d'alignement des dents et des mâchoires. 
                Ils peuvent être amovibles ou fixes et sont conçus pour déplacer progressivement les dents vers leur position correcte. 
                Les appareils amovibles sont souvent utilisés pour les adolescents et les jeunes enfants, tandis que les appareils fixes sont plus courants pour les adultes. 
                Un suivi régulier est nécessaire pour ajuster l'appareil et assurer un traitement efficace.`,
            ar: `
                الأجهزة التقويمية تُستخدم لتصحيح مشاكل المحاذاة للأسنان والفكين.
                يمكن أن تكون قابلة للإزالة أو ثابتة ومصممة لتحريك الأسنان تدريجيًا إلى موضعها الصحيح.
                تُستخدم الأجهزة القابلة للإزالة غالبًا للمراهقين والأطفال الصغار، بينما تكون الأجهزة الثابتة أكثر شيوعًا لدى البالغين.
                يتطلب العلاج متابعة دورية لضبط الجهاز وضمان فعالية العلاج.`,
        },
        videoUrl: "https://www.youtube.com/watch?v=l2uQyBCmj9I&list=PLkshgX1LcJhHtT1HNsWZvxbhPv1z6AWXz&index=1" // Replace with actual video URL
    },
    "protheses-sur-implants": {
        title: {
            fr: "Prothèses sur implants",
            ar: "الأطقم على الزرعات"
        },
        description: {
            fr: `
                Les prothèses sur implants sont des dispositifs dentaires fixés sur des implants dentaires en titane insérés dans l'os de la mâchoire. 
                Elles sont utilisées pour remplacer des dents manquantes de manière stable et durable. 
                Les implants offrent une base solide pour les couronnes, bridges, ou prothèses complètes. 
                Ce type de prothèse est particulièrement adapté aux patients ayant perdu plusieurs dents ou ayant des prothèses traditionnelles inconfortables.`,
            ar: `
                الأطقم على الزرعات هي أجهزة سنية تُثبَت على زرعات سنية من التيتانيوم تُزرع في عظم الفك.
                تُستخدم لاستبدال الأسنان المفقودة بطريقة ثابتة ودائمة.
                توفر الزرعات قاعدة قوية للتاج، الجسور، أو الأطقم الكاملة.
                هذا النوع من الأطقم مناسب بشكل خاص للمرضى الذين فقدوا عدة أسنان أو لديهم أطقم تقليدية غير مريحة.`,
        },
        videoUrl: "https://www.youtube.com/watch?v=qbZTqUCyygY&list=PLkshgX1LcJhHtT1HNsWZvxbhPv1z6AWXz&index=28" // Replace with actual video URL
    },
    "reparations": {
        title: {
            fr: "Réparations",
            ar: "إصلاحات"
        },
        description: {
            fr: `
                Les réparations dentaires comprennent les ajustements, rebasages, et réparations des prothèses dentaires. 
                Les ajustements sont nécessaires lorsque les prothèses ne s'adaptent plus correctement en raison des changements dans la bouche du patient. 
                Le rebasage implique l'ajout de matériel à la base de la prothèse pour améliorer l'ajustement. 
                Les réparations peuvent inclure la réparation de fissures ou de cassures dans les prothèses. 
                Il est important de faire examiner régulièrement vos prothèses par un professionnel pour assurer leur bon état.`,
            ar: `
                الإصلاحات السنية تشمل التعديلات، وإعادة التأسيس، وإصلاح الأطقم السنية.
                التعديلات ضرورية عندما لا تتناسب الأطقم بشكل صحيح بسبب التغيرات في فم المريض.
                إعادة التأسيس تشمل إضافة مادة إلى قاعدة الطقم لتحسين التناسب.
                قد تشمل الإصلاحات تصليح التشققات أو الكسور في الأطقم.
                من المهم فحص الأطقم بانتظام من قبل متخصص لضمان حالتها الجيدة.`,
        },
        videoUrl: "https://www.youtube.com/watch?v=Fxs77VBBDMs" // Replace with actual video URL
    },
    "goutieres-protection": {
        title: {
            fr: "Gouttières de protection",
            ar: "حافظات الحماية"
        },
        description: {
            fr: `
                Les gouttières de protection sont des dispositifs utilisés pour prévenir le bruxisme (grincement des dents) et protéger les dents contre les dommages. 
                Elles sont souvent fabriquées en plastique souple et sont portées la nuit ou pendant des activités sportives. 
                Les gouttières aident à réduire la pression exercée sur les dents et les mâchoires, ce qui peut prévenir les douleurs et les usures dentaires. 
                Il est important de faire ajuster la gouttière par un professionnel pour garantir un confort optimal.`,
            ar: `
                حافظات الحماية هي أجهزة تُستخدم لمنع الصرير (صوت طحن الأسنان) وحماية الأسنان من الأضرار.
                تُصنع غالبًا من البلاستيك المرن وتُرتدى ليلاً أو أثناء الأنشطة الرياضية.
                تساعد الحافظات في تقليل الضغط على الأسنان والفكين، مما يمكن أن يمنع الألم وتآكل الأسنان.
                من المهم ضبط الحافظة بواسطة متخصص لضمان الراحة المثلى.`,
        },
        videoUrl: "https://www.youtube.com/watch?v=BjgKXRWbQN8&list=PLkshgX1LcJhHtT1HNsWZvxbhPv1z6AWXz&index=55" // Replace with actual video URL
    },
    "protheses-esthetiques-personnalisees": {
        title: {
            fr: "Prothèses esthétiques personnalisées",
            ar: "الأطقم التجميلية المخصصة"
        },
        description: {
            fr: `
                Les prothèses esthétiques personnalisées sont conçues pour offrir une apparence naturelle et harmonieuse aux patients. 
                Elles sont fabriquées en fonction des besoins et des préférences individuels, en utilisant des matériaux de haute qualité. 
                Ces prothèses visent à améliorer l'apparence du sourire tout en assurant un confort optimal. 
                Elles sont souvent utilisées pour les patients qui recherchent une solution esthétique et personnalisée pour leurs besoins dentaires.`,
            ar: `
                الأطقم التجميلية المخصصة مصممة لتوفير مظهر طبيعي ومتناسق للمرضى.
                تُصنع بناءً على احتياجات وتفضيلات الأفراد، باستخدام مواد عالية الجودة.
                تهدف هذه الأطقم إلى تحسين مظهر الابتسامة مع ضمان راحة مثالية.
                تُستخدم غالبًا للمرضى الذين يبحثون عن حل تجميلي ومخصص لاحتياجاتهم السنية.`,
        },
        videoUrl: "https://www.youtube.com/watch?v=S5CCX9ntf70&list=PLkshgX1LcJhHtT1HNsWZvxbhPv1z6AWXz&index=20" // Replace with actual video URL
    }
};


        const OfferDetail = () => {
            const { offerId } = useParams();
            const offer = offerDetails[offerId] || { description: { fr: "Détails non disponibles.", ar: "التفاصيل غير متوفرة." }, videoUrl: "" };
        
            return (
                <div className="offer-detail">
                    <h1 style={{color:"#0f3160"}}>{offerId.replace('-', ' ').toUpperCase()}</h1>
                    <div className="offer-description">
                       
                        
                        <p className="arabic">{offer.description.ar}</p>
                        < TbDental />
                        <p className="french">{offer.description.fr}</p>
                    </div>
                    {offer.videoUrl && (
                        <div className="offer-video">
                            
                            <iframe 
                                src={`https://www.youtube.com/embed/${new URL(offer.videoUrl).searchParams.get('v')}`} 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                title="Vidéo explicative"
                            ></iframe>
                        </div>
                    )}
                </div>
            );
        };
        
        export default OfferDetail;
