import './App.css';
import MermaidReact from 'mermaid-react';
import MainpageImage from '../../trans-speech/src/img/mainpage.png';
import NstuImage from '../../trans-speech/src/img/nstu.png';
import GisImage from '../../trans-speech/src/img/2gis.png';
import WrikeImage from '../../trans-speech/src/img/wrike.png';
import VkImage from '../../trans-speech/src/img/vk.png';
import kPhpImage from '../../trans-speech/src/img/kphp.jpg';
import ReactImage from '../../trans-speech/src/img/react.png';
import FpjsImage from '../../trans-speech/src/img/fingerprint.png';
import MahjongImage from '../../trans-speech/src/img/mahjong.jpg';
import AnimeImage from '../../trans-speech/src/img/anime.jpg';
import CatsImage from '../../trans-speech/src/img/cats.jpg';
import customTheme from '../../trans-speech/src/theme/theme-default';
import {
  Deck,
  FlexBox,
  Heading,
  Notes,
  Slide,
  AnimatedProgress,
  Box,
  FullScreen,
  ListItem,
  Appear,
  UnorderedList,
  CodePane,
  OrderedList
} from "spectacle";

const diagrams = {
  renderNode: `
flowchart LR
    A[Start] --> B(renderNode)
    B --> C{is terminal?}
    C -->|yes| D[Print as text]
    C -->|no| E[Custom render logic]
    E -.->D
    E --> B
`
};

// TODO: 1) допилить TODO пункты, 2) разбавить мемасиками

// Reference: https://formidable.com/open-source/spectacle/docs/props

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <AnimatedProgress />
    </Box>
  </FlexBox>
);

function App() {
  return (
    <Deck theme={customTheme} template={template} transition={{
      from: {opacity: 0}, enter: {opacity: 1}, leave: {opacity: 0}
    }}>
      <Slide>
        <FlexBox height="100%">
          <FlexBox height="100%" flexDirection="column">
            <Heading>Трудности перевода</Heading>
            <Heading margin="0px" fontSize="h4">переводим код между языками весело и задорно</Heading>
          </FlexBox>
          <img src={MainpageImage} className="r-stretch" alt=''/>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%">
          <Heading>Приветствие</Heading>
          <Notes>
            - Привет, меня зовут...
            - Расскажу про ...
          </Notes>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%">
          <Heading>Что сегодня будет?</Heading>
          <UnorderedList>
            <Appear>
              <ListItem>Минутка самолюбования</ListItem>
            </Appear>
            <Appear>
              <ListItem>Общая информация про методы парсинга</ListItem>
            </Appear>
            <Appear>
              <ListItem>Пример из жизни: как я писал транспайлер из typescript в php</ListItem>
            </Appear>
          </UnorderedList>
          <Notes>
            - Обо мне
            - ОБЩИЕ вещи про то как строят компиляторы
            - Как и зачем я это делал?
          </Notes>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" justifyContent='space-around'>
          <img src={NstuImage} width="300px" alt='' />
          <ul>
            <li>АВТФ, 2010</li>
            <li>Вычислительные комплексы системы и сети</li>
            <li>Системная аналитика</li>
          </ul>
          <Notes>
            - Бака, мага - специальности, темы, что изучал
          </Notes>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" justifyContent='space-around'>
          <img src={MahjongImage} width="300px" alt='' />
          <img src={AnimeImage} width="300px" alt='' />
          <img src={CatsImage} width="300px" alt='' />
          <Notes>
            - маджонг, аниме, котики, делать мир лучше
          </Notes>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" justifyContent='space-around'>
          <img src={GisImage} width="300px" alt='' />
          <img src={WrikeImage} width="300px" alt='' />
          <img src={VkImage} width="120px" alt='' />
          <img src={FpjsImage} width="150px" alt='' />
          <Notes>
            - компании
            - мидл - архитектор - мидл - архитектор - мидл
          </Notes>
        </FlexBox>
      </Slide>

      <Slide>
      <FlexBox height="100%">
        <Heading>Как понять, что мне нужен транспилятор?</Heading>
        <Notes>
          - Главный вопрос с которого начинать - НАФИГА
          - Мб достаточно уже имеющихся инструментов? Мб можно обойтись средствами ЯП?
          - Ну если надо, то кроличья нора ждет
          - Пример во второй части презентации
        </Notes>
      </FlexBox>
    </Slide>

      <Slide>
        <FlexBox height="100%">
          <Heading>Матчасть</Heading>
          <Notes>
            - Немного терминологии и общих сведений
          </Notes>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%">
          <Heading>Из чего состоит ЯП?</Heading>
          <UnorderedList>
            <Appear>
              <ListItem>Токены: литералы, операторы, ключевые слова</ListItem>
            </Appear>
            <Appear>
              <UnorderedList>
                <ListItem>Лексический акцептор/анализатор</ListItem>
              </UnorderedList>
            </Appear>
            <Appear>
              <ListItem>Синтаксические конструкции: условные операторы, функции, классы</ListItem>
            </Appear>
            <Appear>
              <UnorderedList>
                <ListItem>Синтаксический акцептор/анализатор</ListItem>
              </UnorderedList>
            </Appear>
            <Appear>
              <ListItem>Семантика: смысл, который несет в себе код, выраженный в виде синтаксических конструкций</ListItem>
            </Appear>
            <Appear>
              <UnorderedList>
                <ListItem>???</ListItem>
              </UnorderedList>
            </Appear>
          </UnorderedList>
          <Notes>
            - Из чего состоит ЯП? Своими словами
            - Чуть подробнее про каждое далее
          </Notes>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Лексический анализатор</Heading>
          <CodePane language='javascript' showLineNumbers={false}>{`
            1 + 2 // [NumericLiteral, PlusToken, NumericLiteral]
            x = y // [Identifier, EqualToken, Idenitifer]
            
            let x = y.toString()
            /* [ 
              LetKeyword, Identifier, EqualToken, 
              Identifier, DotToken, Identifier,
               OpenParenToken, CloseParenToken
            ] */
          `}</CodePane>
        </FlexBox>
        <Notes>
          - Смысл: разбить текст на токены разных типов.
          - Как понять какой тип токена?
          - Имплементация: символьные автоматы, регулярки
          - На выходе - плоский список токенов
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Синтаксический анализатор</Heading>
          <CodePane language='javascript' showLineNumbers={false}>{`
            let x = y.toString()
          `}</CodePane>
          <hr style={{ width: '100%'}} />
          <CodePane language='javascript' showLineNumbers={false}>{`
            AssignmentExpression {
              keyword: LetKeyword,
              identifier: Identifier { text: 'x' },
              expression: CallExpression {
                args: [],
                expression: PropertyAccessExpression {
                  property: Identifier { text: 'toString' },
                  expression: Identifier { text: 'y' }
                }
              }
            }
          `}</CodePane>
        </FlexBox>
        <Notes>
          - На входе - плоский список токеноы
          - Что делаем - строим AST.
          - Механизм похож - автоматы с памятью
          - Дальше?
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%">
          <Heading>А что дальше?</Heading>
          <UnorderedList>
            <Appear>
              <ListItem>Преобразование AST</ListItem>
            </Appear>
            <Appear>
              <ListItem>Генерация кода по AST</ListItem>
            </Appear>
            <Appear>
              <ListItem>Оптимизации времени компиляции</ListItem>
              <ListItem>Виртуальная машина</ListItem>
              <ListItem>JIT</ListItem>
              <ListItem>....</ListItem>
            </Appear>
          </UnorderedList>
        </FlexBox>
        <Notes>
          - Дальше - кроличья норма кастомной логики, придающей семантику.
          - AST1 в AST2
          - Сразу генерировать код на целевом языке
          - JIT, оптимизации - не рассматриваем, долго
          - Перед примером рассмотрим еще немного теории
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%" justifyContent="space-between">
          <CodePane language='javascript' showLineNumbers={false}>{`
            Alphabet = [OpenTag, ClosingTag, Literal]
  
            S -> OpenTag S ClosingTag
            S -> Literal
          `}</CodePane>
          <CodePane language='html' showLineNumbers={true}>{`
            text
            <div>text</div>
            <div><span><a>text</a></span></div>
            <span>text</div>
            <span><div>text</lol></kek>
            <div>text</div><span>text</span>
          `}</CodePane>
        </FlexBox>

        <Notes>
          - Порождающая грамматика на простом примере
          - Токен === символ
          - Терминальные и нетерминальные символы
          - Терминальные символы рендерим по большей части как есть
          - Нетерминальные - пишем кастомную логику
          - Последнее выражение некорректно, в отличие от остальных
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%" justifyContent="space-between">
          <div className='code-smaller'>
            <CodePane language='javascript' showLineNumbers={false}>{`
              // let x = y.toString()
              AssignmentExpression {
                keyword: LetKeyword,
                identifier: Identifier {
                  text: 'x'
                },
                expression: CallExpression {
                  args: [],
                  expression: PropertyAccessExpression {
                    property: Identifier {
                      text: 'toString'
                    },
                    expression: Identifier {
                      text: 'y'
                    }
                  }
                }
              }
            `}</CodePane>
          </div>

          <div className='code-smaller'>
            <CodePane language='javascript' showLineNumbers={false}>{`
              function render(node) {
                switch (node.kind) {
                  case AssignmentExpression:
                    const id = render(node.identifier);
                    const expr = render(node.expression};
                    return \`(set \${id} \${expr})\`; 
                  case Identifier: // terminal - trivial!
                    return node.text;
                  case CallExpression: // bad impl!
                    if (
                      node.expression.kind === PropertyAccessExpression &&
                      node.expression.property.text === 'toString'
                    ) {
                      const expr = render(node.expression.expression);
                      return \`(write-to-string \${expr})\`;
                    }
                }
              }
  
              render(assignment); // (set x (write-to-string y))
            `}</CodePane>
          </div>
        </FlexBox>
        <Notes>
          - Рассмотреть как и куда мы тут проваливаемся
          - Принцип ортогональности синтаксических конструкций
          - Почему обработчик CallExpression написан плохо: рендеринг подвыражения
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%">
          <Heading>Ресурсы</Heading>
          <UnorderedList>
            <Appear>
              <ListItem>Ахо, Ульман: Компиляторы</ListItem>
              <ListItem>Карпов: Основы построения трансляторов</ListItem>
            </Appear>
            <Appear>
              <ListItem>GNU Tools:</ListItem>
              <UnorderedList>
                <ListItem>Lex</ListItem>
                <ListItem>Bison</ListItem>
              </UnorderedList>
            </Appear>
            <Appear>
              <ListItem>JS Tools:</ListItem>
              <UnorderedList>
                <ListItem>Typescript compiler</ListItem>
                <ListItem>Espree</ListItem>
              </UnorderedList>
            </Appear>
          </UnorderedList>
        </FlexBox>
        <Notes>
          - Куда копнуть в теории? Книги.
          - Ахо-Ульман - библия компиляторщика
          - Lex/Bison - для знакомых с С/С++. Например php их юзает.
          - Готовые штуки - espree (eslint!), ts compiler api
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%">
          <Heading>Предыстория</Heading>
          <Appear>
            <img src={VkImage} width="120px" alt='' style={{ position: 'absolute', top: '20%', left: '20%' }} />
          </Appear>
          <Appear>
            <img src={ReactImage} width="120px" alt='' style={{ position: 'absolute', right: '20%', top: '20%' }} />
          </Appear>
          <Appear>
            <img src={kPhpImage} width="120px" alt='' style={{ position: 'absolute', right: '20%', bottom: '20%' }} />
          </Appear>
        </FlexBox>
        <Notes>
          - Людям нравится когда другим людям больно. Про свой опыт.
          - 2019 год, vk.
          - React + SSR
          - KPHP. Это такой статически типизированный PHP
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Шо таки делать если на бэкенде у вас нет JS?</Heading>
          <UnorderedList>
            <Appear>
              <ListItem>Поставить nodejs ¯\_(ツ)_/¯</ListItem>
            </Appear>
            <Appear>
              <ListItem>Запихнуть рантайм v8 в этот ваш php/kphp</ListItem>
            </Appear>
            <Appear>
              <ListItem>GraalVM?</ListItem>
            </Appear>
            <Appear>
              <ListItem>А что если взять JS и сделать из него PHP?</ListItem>
            </Appear>
          </UnorderedList>
        </FlexBox>
        <Notes>
          1) Админы негодуют
          2) Команда kphp негодует
          3) У нас не java, но вот в Одноклассниках было норм
          4) А у нас уже был такой опыт - js2php @ espree
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Допущения и ограничения</Heading>
          <UnorderedList>
            <Appear>
              <ListItem>Код на выходе не обязан соответствовать коду на входе.</ListItem>
            </Appear>
            <Appear>
              <ListItem>Для скорости можно ставить цель не поддерживать все возможные конструкции языка, т.е. ограничиться подмножеством языка.</ListItem>
            </Appear>
            <Appear>
              <ListItem>Околостатическая типизация 😨</ListItem>
            </Appear>
          </UnorderedList>
        </FlexBox>
        <Notes>
          - Надо облегчить себе жизнь ограничениями и допушениями
          - Возможности целевого языка эмулируются при компиляции
          - Лесом классы, асинхронщину. Только функциональные компоненты!
          - Лучше если мы дадим kphp хорошие типы (хотя он может в mixed)
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <UnorderedList>
            <Appear>
              <ListItem>Используем Typescript compiler API</ListItem>
              <UnorderedList>
                <Appear>
                  <ListItem>...Не то что бы был какой-то иной выбор помимо typescript для языка реализации</ListItem>
                </Appear>
                <Appear>
                  <ListItem>Инструменты для работы с AST у нас будут из коробки, что приятно</ListItem>
                </Appear>
              </UnorderedList>
            </Appear>
            <Appear>
              <ListItem>Не пытаемся трансформировать AST, пишем сразу генератор кода</ListItem>
            </Appear>
          </UnorderedList>
        </FlexBox>
        <Notes>
          - ts compiler api предопределяет тех. стек
          - Почти все из коробки
          - Сторонние генераторы явно не на TS.
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Общая схема генерации кода</Heading>
          <MermaidReact id='renderNode' mmd={diagrams.renderNode} />
        </FlexBox>
        <Notes>
          - Как видели на примере, генератор это рекурсивный обход AST.
          - Терминальная нода == токен или идентификатор (определяется попыткой подстановки). Остальное - нетерминальные ноды.
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Вернемся к примеру</Heading>
          <CodePane language='javascript' showLineNumbers={false}>{`
            let x = y.toString()
          `}</CodePane>
          <hr style={{ width: '100%'}} />
          <CodePane language='javascript' showLineNumbers={false}>{`
            AssignmentExpression {
              keyword: LetKeyword,
              identifier: Identifier { text: 'x' },
              expression: CallExpression {
                args: [],
                expression: PropertyAccessExpression {
                  property: Identifier { text: 'toString' },
                  expression: Identifier { text: 'y' }
                }
              }
            }
          `}</CodePane>
        </FlexBox>
        <Notes>
          - LetKeyword - терминальная нода.
          - Вместо идентификаторов можно подставить выражение, значит их надо обрабатывать как нетерминалы
          - Обр. внимание: Лишние токены отсутствуют в AST
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%">
          <Heading>Непринужденное демо</Heading>
        </FlexBox>
        <Notes>
          Сейчас по-быстрому покажу как это все в итоге работает и поедем дальше.

          [DEMO]
          - Модульная структура
          - Проброс переменных в замыкание
          - Вывод типов и зависимый от типов рендеринг
          - Удаление неиспользуемого кода

          Немного расскажу про нюансы которые мы только что увидели.
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>WTF #1: проброс переменных в замыкание</Heading>
          <FlexBox height="100%">
            <CodePane language='javascript'>{`
              let x = 1;
              function test() {
                return x * 2;
              }
            `}</CodePane>
            →
            <CodePane language='php'>{`
              $x = 1;
              function test() use($x) {
                return $x * 2;
              }
            `}</CodePane>
          </FlexBox>
        </FlexBox>
        <Notes>
          - Первый челлендж: автоматическое просачивание vs ручное
          - Что делать? Отслеживать использование
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>WTF #1: проброс переменных в замыкание</Heading>
          <FlexBox height="100%">
            <CodePane language='javascript'>{`
              let x = 1;
              function test() {
                x++;
                return x * 2;
              }
            `}</CodePane>
            →
            <CodePane language='php' highlightRanges={[2]}>{`
              $x = 1;
              function test() use(&$x) {
                $x++;
                return $x * 2;
              }
            `}</CodePane>
          </FlexBox>
        </FlexBox>
        <Notes>
          - В php работает передача по ссылке при пробросе - то что надо
          - В kphp не работает - гонки, UB. Поэтому приходится городить костыли.
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>WTF #2: type-dependent rendering</Heading>
          <FlexBox height="100%">
            <CodePane language='javascript'>{`
              let x = 1 + 2;
              let y = "a" + "b";
              let z = "12" + 1;
            `}</CodePane>
            →
            <CodePane language='php'>{`
              $x = 1 + 2;
              $y = "a" . "b";
              $z = // ???
            `}</CodePane>
          </FlexBox>
        </FlexBox>
        <Notes>
          - Большая полиморфность JS.
          - Что должно быть в третьем случае?
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>WTF #2: type-dependent rendering</Heading>
          <FlexBox height="100%">
            <CodePane language='javascript'>{`
              let x = 1 + 2;
              let y = "a" + "b";
              let z = "12" + 1; // 121
            `}</CodePane>
            →
            <CodePane language='php'>{`
              $x = 1 + 2;
              $y = "a" . "b";
              $z = "12" . 1; // 121
            `}</CodePane>
          </FlexBox>
        </FlexBox>
        <Notes>
          - Очевидно, должно работать аналогично.
          - Используем вывод типов TS
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>WTF #2: type-dependent rendering</Heading>

            <CodePane language='javascript'>{`
              let x = [1, 2, 3].includes(2);
              let y = "lolkek".includes("kek");
            `}</CodePane>
            ↓
            <CodePane language='php'>{`
              $x = in_array(2, [1, 2, 3], true);
              $y = strpos("lolkek", "kek") !== false;
            `}</CodePane>

        </FlexBox>
        <Notes>
          - Аналогично и с полиморфными методами стандартной библиотеки
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>WTF #3: dead code elimination</Heading>

          <CodePane language='javascript'>{`
              let x = [1, 2, 3].includes(2);
              let y = "lolkek".includes("kek");
            `}</CodePane>
          ↓
          <CodePane language='php'>{`
              // .... 🕸
            `}</CodePane>

        </FlexBox>
        <Notes>
          - Самая дезориентирующая хрень
          - Например: есть onclick в компоненте, на сервере он не нужен
          - И все его зависимости не нужны.
          - Убираем одну - появляются другие
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>WTF #3: dead code elimination</Heading>

          <OrderedList>
            <Appear>
              <ListItem>Собрать все идентификаторы</ListItem>
            </Appear>
            <Appear>
              <ListItem>Установить связи между идентификаторами</ListItem>
            </Appear>
            <Appear>
              <ListItem>Задать исходно используемые идентификаторы</ListItem>
            </Appear>
            <Appear>
              <ListItem>Обходим граф и помечаем используемые идентификаторы</ListItem>
            </Appear>
            <Appear>
              <ListItem>При генерации кода не генерируем выражения инициализации неиспользуемых идентификаторов ¯\_(ツ)_/¯</ListItem>
            </Appear>
          </OrderedList>

        </FlexBox>
        <Notes>
          - идем по пунктам с подробностями.
          1) ...
          2) кто кого использует?
          3) export, console.log
          4) ...
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%">
          <Heading>А что там с внедрением?</Heading>
        </FlexBox>
        <Notes>
          - Мобильная версия VK - да.
          - Еще пара подпроектов - да
          - А вообще инструмент в опенсорсе в NPM и в гитхабе VK (без рекламы).
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%">
          <Heading>Спасибо за внимание</Heading>
          <UnorderedList>
            <ListItem>Олег Клименко</ListItem>
            <ListItem>Mailto: me@ctizen.dev</ListItem>
            <ListItem>https://github.com/ctizen</ListItem>
          </UnorderedList>
        </FlexBox>
      </Slide>

    </Deck>
  );
}

export default App;
