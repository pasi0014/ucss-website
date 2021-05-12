export type Post = {
  id: string;
  author: string;
  body: string;
  pdf?: any;
  extendedBody: string;
  uploaded_at: Date;
};

export type StoryType = {
  post: Post;
};
export default class Posts {
  public static getPosts() {
    var postsArray: Post[] = [
      {
        id: "1",
        author: "Марина Завгородня",
        body: "Хочу залишити відгук про Суспільну Службу Українців Канади. Я приїхала в Канаду по робочому контракту на 2 роки в провінцію Альберту, залишивши тимчасово сім’ю в Україні. Спочатку все виглядало казково, але… Пропрацювавши на фермі лише 2,5 місяці я втратила роботу через карантин і залишилася буквально на вулиці зовсім сама. Довелося погодитися на першу ж вакансію, яка мені трапилась. Мене запросив на роботу фермер літнього віку в Онтаріо, надавав житло у своєму будинку і розмови про те, що все у мене буде добре і він мені допоможе з усім. Я була дуже щаслива. Через кілька днів після приїзду на нове місце почалися жахіття. Фермер почав проявляти до мене нездорову цікавість, враховуючи те, що я одружена, величезну різницю у віці, мені 32 роки, а йому 68. Все розпочалося з непристойних компліментів в мою адресу, потім мені почали забороняти розмови з чоловіком.",
        extendedBody:
          "Дуже швидко фермер почав вимагати від мене жити з ним як в сім’ї, щоб я не тільки готувала йому, прибирала після нього, стелила постіль щовечора, а також почалися розмові про інтим між нами. Також почались різні погрози в мою адресу. Мені зараз дуже важко описувати всі деталі цього жахіття, на той час мої руки опустилися, було дуже страшно і самотньо. Я не знала, що робити. Але зібравшись з останніми силами я написала адміністратору місцевої групи у Фейсбуці в надії познайомитись з українцями поблизу, завести друзів, щоб не було так страшно. Молилася, щоб знайшовся вихід з моєї ситуації. А потім сталося чудо. Моя історія потрапила до отця Ігоря, настоятеля Української православної Церкви в Оттаві, а з його допомогою до Української суспільної служби. Спочатку зі мною сконтактувала Тетяна Плива, секретар. Вона мені допомогла вирватися з ферми, потім повністю супроводжувала процес переоформлення моїх робочих документів, допомагала з усім, підтримувала. Голова служби Марина Попович прихистила мене, надавши безкоштовне житло, віднеслась до мене як до рідної дитини, хоча бачила мене вперше в житті. Завдяки цим людям, а також їх сім’ям та друзям, я опинилася в безпеці, в теплі, затишку, комфорті. Я змогла заспокоїтися, зібратися з думками, знайти нову роботу і все налагодилося. Мені не вистачить і 100 сторінок, щоб описати все те добро і всю допомогу, що вони для мене зробили. Я не можу словами передати свою безмежну вдячність за це. Але Бог все бачить! І Він сторицею віддячить їм, а також їхнім родинам за їх допомогу. Я зустріла добрих, щирих чуйних людей, які стали мені як сім’я. Ця організація, а точніше люди, які там працюють, вони рятують життя. Ще раз дякую за все!!!",
        uploaded_at: new Date(),
      },
      {
        id: "2",
        author: "Подяка Від Благодійної Організації",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi doloremque non aliquam repellendus consectetur molestias debitis laborum, repudiandae omnis? Tenetur, sunt. Eveniet reiciendis nulla est! Dolor iusto facere ab laudantium!",
        extendedBody: "",
        uploaded_at: new Date(),
      },
    ];
    return postsArray;
  }
}