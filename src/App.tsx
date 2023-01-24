import './App.css';
import MermaidReact from 'mermaid-react';
import PrevedImage from '../../trans-speech/src/img/preved.png';
import MainpageImage from '../../trans-speech/src/img/mainpage.png';
import DemoImage from '../../trans-speech/src/img/demo.png';
import NstuImage from '../../trans-speech/src/img/nstu.png';
import GisImage from '../../trans-speech/src/img/2gis.png';
import WrikeImage from '../../trans-speech/src/img/wrike.png';
import VkImage from '../../trans-speech/src/img/vk.png';
import kPhpImage from '../../trans-speech/src/img/kphp.jpg';
import ReactImage from '../../trans-speech/src/img/react.png';
import FpjsImage from '../../trans-speech/src/img/fingerprint.png';
import AdoptionImage from '../../trans-speech/src/img/adoption.jpg';
import MahjongImage from '../../trans-speech/src/img/mahjong.jpg';
import AnimeImage from '../../trans-speech/src/img/anime.jpg';
import CatsImage from '../../trans-speech/src/img/cats.jpg';
import WatImage from '../../trans-speech/src/img/wat.gif';
import UdavImage from '../../trans-speech/src/img/udav.jpg';
import HistoryImage from '../../trans-speech/src/img/history.jpg';
import QuestionsImage from '../../trans-speech/src/img/questions.jpg';
import WtfVideo from '../../trans-speech/src/img/wtf.mp4';
import customTheme from '../../trans-speech/src/theme/theme-default';
import {
  Deck,
  FlexBox,
  Heading,
  Notes,
  Slide,
  Box,
  FullScreen,
  ListItem,
  Appear,
  UnorderedList,
  CodePane,
  Progress
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
      <Progress />
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
            <Heading margin="0px" fontSize="h4">переводим код между языками<br />весело и задорно</Heading>
          </FlexBox>
          <img src={MainpageImage} className="r-stretch" alt=''/>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%">
          <img src={PrevedImage} width="300px" style={{ position: 'absolute', top: '25%', left: '10%' }} alt='' />
          <Heading>Приветствие</Heading>
          <Notes>
            - Привет, меня зовут...<br />
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
            - Обо мне<br />
            - ОБЩИЕ вещи про то как строят компиляторы<br />
            - Как и зачем я это делал?
          </Notes>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" justifyContent='space-around'>
          <img src={NstuImage} width="450px" alt='' />
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
          <img src={MahjongImage} width="450px" alt='' />
          <img src={AnimeImage} width="450px" alt='' />
          <img src={CatsImage} width="450px" alt='' />
          <Notes>
            - маджонг, аниме, котики, делать мир лучше
          </Notes>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%" justifyContent='space-around'>
          <img src={GisImage} width="450px" alt='' />
          <img src={WrikeImage} width="450px" alt='' />
          <img src={VkImage} width="180px" alt='' />
          <img src={FpjsImage} width="225px" alt='' />
          <Notes>
            - компании<br />
            - мидл - архитектор - мидл - архитектор - мидл
          </Notes>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%">
          <Heading>Как понять, что мне нужен транспилятор?</Heading>
          <img src={UdavImage} alt='' />
          <Notes>
            - Главный вопрос с которого начинать - НАФИГА<br />
              - Обычно - чтобы получить единый источник истины для данных или поведения
              - Пример
            - Мб уже есть нужный транспилятор? Мб достаточно уже имеющихся инструментов? Мб можно обойтись средствами ЯП?<br />
            - Ну если надо, то кроличья нора ждет<br />
            - Пример во второй части презентации
            - Дальше немного терминологии и общих сведений
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
          </Notes>
        </FlexBox>
      </Slide>

      <Slide>
        <FlexBox height="100%">
          <img src={WatImage} alt='' />
        </FlexBox>
        <Notes>
          - Чуть подробнее про каждое далее
        </Notes>
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
          - Смысл: разбить текст на токены разных типов.<br />
          - Как понять какой тип токена?<br />
          - Имплементация: символьные автоматы, регулярки<br />
          - На выходе - плоский список токенов
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Синтаксический анализатор</Heading>
          <CodePane language='javascript' showLineNumbers={false}>{`
            x = y.toString()
          `}</CodePane>
          <hr style={{ width: '100%'}} />
          <CodePane language='javascript' showLineNumbers={false}>{`
            AssignmentExpression {
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
          - На входе - плоский список токенов<br />
          - Что делаем - строим AST.<br />
          - Механизм похож - автоматы с памятью<br />
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
          - НЕ ЗАЛИПАЕМ
          - Дальше - кроличья норма кастомной логики, придающей семантику.<br />
          - AST1 в AST2<br />
          - Сразу генерировать код на целевом языке<br />
          - JIT, оптимизации - не рассматриваем, долго<br />
          - Перед примером рассмотрим еще немного теории
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%" justifyContent="space-between">
          <div className='code-smaller'>
            <CodePane language='javascript' showLineNumbers={false}>{`
              Alphabet = [OpenTag, ClosingTag, Literal]
    
              S -> OpenTag S ClosingTag
              S -> Literal
            `}</CodePane>
          </div>
          <div className='code-smaller'>
            <CodePane language='html' showLineNumbers={true}>{`
              text
              <div>text</div>
              <div><span><a>text</a></span></div>
              <span>text</div>
              <span><div>text</lol></kek>
              <div>text</div><span>text</span>
            `}</CodePane>
          </div>
        </FlexBox>

        <Notes>
          - Порождающая грамматика на простом примере<br />
          - Токен === символ<br />
          - Терминальные и нетерминальные символы<br />
          - Терминальные символы рендерим по большей части как есть<br />
          - Нетерминальные - пишем кастомную логику<br />
          - Последнее выражение некорректно, в отличие от остальных
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%" justifyContent="center">
          <div className='code-smaller'>
            <CodePane language='javascript' showLineNumbers={false}>{`
              // x = y.toString()
              AssignmentExpression {
                id: Identifier {
                  text: 'x'
                },
                expr: CallExpression {
                  args: [],
                  expr: PropertyAccessExpression {
                    prop: Identifier {
                      text: 'toString'
                    },
                    expr: Identifier {
                      text: 'y'
                    }
                  }
                }
              }
            `}</CodePane>
          </div>
        </FlexBox>
        <Notes>
          - Как парсится конструкция?
          - Что во что вложено?
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%" justifyContent="space-between">
          <div className='code-even-smaller'>
            <CodePane language='javascript' showLineNumbers={false}>{`
              // x = y.toString()
              AssignmentExpression {
                id: Identifier {
                  text: 'x'
                },
                expr: CallExpression {
                  args: [],
                  expr: PropertyAccessExpression {
                    prop: Identifier {
                      text: 'toString'
                    },
                    expr: Identifier {
                      text: 'y'
                    }
                  }
                }
              }
            `}</CodePane>
          </div>

          <div className='code-smaller'>
            <CodePane language='javascript' highlightRanges={[3, [4, 6], 4, [7, 8], 5, 9, [11, 12], 14, [7, 8], 15, 6]}>{`
              function render(node) {
                switch (node.kind) {
                  case AssignmentExpression:
                    const id = render(node.id);
                    const expr = render(node.expr);
                    return \`(set \${id} \${expr})\`; 
                  case Identifier: // terminal - trivial!
                    return node.text;
                  case CallExpression:
                    if (
                      node.expr.kind === PropertyAccessExpression &&
                      node.expr.prop.text === 'toString'
                    ) {
                      const expr = render(node.expr.expr); // oof
                      return \`(write-to-string \${expr})\`;
                    }
                }
              }
  
              render(assignment); // (set x (write-to-string y))
            `}</CodePane>
          </div>
        </FlexBox>
        <Notes>
          - Рассмотреть как и куда мы тут проваливаемся<br />
          - Принцип ортогональности синтаксических конструкций<br />
          - Почему обработчик CallExpression написан плохо: рендеринг подвыражения
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%">
          <video src={WtfVideo} autoPlay loop muted width={750} />
        </FlexBox>
        <Notes>
          - Сумбурно? Непонятно? Согласен.
          - Может на примере станет понятнее
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%">
          <img src={HistoryImage} width="450px" alt='' />
          <Heading>Предыстория</Heading>
          <Appear>
            <img src={VkImage} width="180px" alt='' style={{ position: 'absolute', top: '23%', left: '12%' }} />
          </Appear>
          <Appear>
            <img src={ReactImage} width="180px" alt='' style={{ position: 'absolute', top: '23%', left: '39%' }} />
          </Appear>
          <Appear>
            <img src={kPhpImage} width="180px" alt='' style={{ position: 'absolute', top: '60%', left: '25%' }} />
          </Appear>
        </FlexBox>
        <Notes>
          - Людям нравится когда другим людям больно. Про свой опыт.<br />
          - 2019 год, vk.<br />
          - React + SSR<br />
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
          1) Админы негодуют<br />
          2) Команда kphp негодует<br />
          3) У нас не java, но вот в Одноклассниках было норм<br />
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
          - Надо облегчить себе жизнь ограничениями и допущениями<br />
          - Возможности целевого языка эмулируются при компиляции<br />
          - Лесом классы, асинхронщину. Только функциональные компоненты!<br />
          - Лучше если мы дадим kphp хорошие типы (хотя он может в mixed)
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Что решили?</Heading>
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
          - ts compiler api предопределяет тех. стек<br />
          - Почти все из коробки<br />
          - Сторонние генераторы явно не на TS.
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Общая схема генерации кода</Heading>
          <MermaidReact id='renderNode' mmd={diagrams.renderNode} />
        </FlexBox>
        <Notes>
          - Как видели на примере, генератор это рекурсивный обход AST.<br />
          - Терминальная нода == токен или идентификатор (определяется попыткой подстановки). Остальное - нетерминальные ноды.
        </Notes>
      </Slide>

      <Slide>
        <Heading>Вернемся к примеру</Heading>
        <FlexBox height="100%" justifyContent="space-between">
          <div className='code-even-smaller'>
            <CodePane language='javascript' showLineNumbers={false}>{`
              // x = y.toString()
              AssignmentExpression {
                id: Identifier {
                  text: 'x'
                },
                expr: CallExpression {
                  args: [],
                  expr: PropertyAccessExpression {
                    prop: Identifier {
                      text: 'toString'
                    },
                    expr: Identifier {
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
                    const id = render(node.id);
                    const expr = render(node.expr);
                    return \`\${id} = \${expr}\`; 
                  case Identifier: // terminal - trivial!
                    return '$' + node.text;
                  case CallExpression:
                    if (
                      node.expr.kind === PropertyAccessExpression &&
                      node.expr.prop.text === 'toString'
                    ) {
                      const expr = render(node.expr.expr); // oof
                      return \`(string)(\${expr})\`;
                    }
                }
              }
              render(assignment); // $x = (string)($y)
            `}</CodePane>
          </div>
        </FlexBox>
        <Notes>
          - Модифицировали для вывода php<br />
          - Огребли с разницей между statement и expression - ни одной точки с запятой
        </Notes>
      </Slide>


      <Slide>
        <FlexBox height="100%">
          <img src={DemoImage} width="450px" alt='' />
          <Heading>Непринужденное демо</Heading>
        </FlexBox>
        <Notes>
          Сейчас по-быстрому покажу как это все в итоге работает и поедем дальше.<br /><br />

          [DEMO]<br />
          - Модульная структура<br />
          - Проброс переменных в замыкание<br />
          - Вывод типов и зависимый от типов рендеринг<br />
          - Удаление неиспользуемого кода<br /><br />

          Немного расскажу про нюансы которые мы только что увидели.
        </Notes>
      </Slide>

      {/*<Slide>*/}
      {/*  <FlexBox height="100%" flexDirection="column">*/}
      {/*    <Heading>WTF #1: проброс переменных в замыкание</Heading>*/}
      {/*    <FlexBox height="100%">*/}
      {/*      <CodePane language='javascript'>{`*/}
      {/*        let x = 1;*/}
      {/*        function test() {*/}
      {/*          return x * 2;*/}
      {/*        }*/}
      {/*      `}</CodePane>*/}
      {/*      →*/}
      {/*      <CodePane language='php'>{`*/}
      {/*        $x = 1;*/}
      {/*        function test() use($x) {*/}
      {/*          return $x * 2;*/}
      {/*        }*/}
      {/*      `}</CodePane>*/}
      {/*    </FlexBox>*/}
      {/*  </FlexBox>*/}
      {/*  <Notes>*/}
      {/*    - Первый челлендж: автоматическое просачивание vs ручное<br />*/}
      {/*    - Что делать? Отслеживать использование*/}
      {/*  </Notes>*/}
      {/*</Slide>*/}

      {/*<Slide>*/}
      {/*  <FlexBox height="100%" flexDirection="column">*/}
      {/*    <Heading>WTF #1: проброс переменных в замыкание</Heading>*/}
      {/*    <FlexBox height="100%">*/}
      {/*      <CodePane language='javascript'>{`*/}
      {/*        let x = 1;*/}
      {/*        function test() {*/}
      {/*          x++;*/}
      {/*          return x * 2;*/}
      {/*        }*/}
      {/*      `}</CodePane>*/}
      {/*      →*/}
      {/*      <CodePane language='php' highlightRanges={[2]}>{`*/}
      {/*        $x = 1;*/}
      {/*        function test() use(&$x) {*/}
      {/*          $x++;*/}
      {/*          return $x * 2;*/}
      {/*        }*/}
      {/*      `}</CodePane>*/}
      {/*    </FlexBox>*/}
      {/*  </FlexBox>*/}
      {/*  <Notes>*/}
      {/*    - В php работает передача по ссылке при пробросе - то что надо<br />*/}
      {/*    - В kphp не работает - гонки, UB. Поэтому приходится городить костыли.*/}
      {/*  </Notes>*/}
      {/*</Slide>*/}

      {/*<Slide>*/}
      {/*  <FlexBox height="100%" flexDirection="column">*/}
      {/*    <Heading>WTF #2: type-dependent rendering</Heading>*/}
      {/*    <FlexBox height="100%">*/}
      {/*      <CodePane language='javascript'>{`*/}
      {/*        let x = 1 + 2;*/}
      {/*        let y = "a" + "b";*/}
      {/*        let z = "12" + 1;*/}
      {/*      `}</CodePane>*/}
      {/*      →*/}
      {/*      <CodePane language='php'>{`*/}
      {/*        $x = 1 + 2;*/}
      {/*        $y = "a" . "b";*/}
      {/*        $z = // ???*/}
      {/*      `}</CodePane>*/}
      {/*    </FlexBox>*/}
      {/*  </FlexBox>*/}
      {/*  <Notes>*/}
      {/*    - Большая полиморфность JS.<br />*/}
      {/*    - Что должно быть в третьем случае?*/}
      {/*  </Notes>*/}
      {/*</Slide>*/}

      {/*<Slide>*/}
      {/*  <FlexBox height="100%" flexDirection="column">*/}
      {/*    <Heading>WTF #2: type-dependent rendering</Heading>*/}
      {/*    <FlexBox height="100%">*/}
      {/*      <CodePane language='javascript'>{`*/}
      {/*        let x = 1 + 2;*/}
      {/*        let y = "a" + "b";*/}
      {/*        let z = "12" + 1; // 121*/}
      {/*      `}</CodePane>*/}
      {/*      →*/}
      {/*      <CodePane language='php'>{`*/}
      {/*        $x = 1 + 2;*/}
      {/*        $y = "a" . "b";*/}
      {/*        $z = "12" . 1; // 121*/}
      {/*      `}</CodePane>*/}
      {/*    </FlexBox>*/}
      {/*  </FlexBox>*/}
      {/*  <Notes>*/}
      {/*    - Очевидно, должно работать аналогично.<br />*/}
      {/*    - Используем вывод типов TS*/}
      {/*  </Notes>*/}
      {/*</Slide>*/}

      {/*<Slide>*/}
      {/*  <FlexBox height="100%" flexDirection="column">*/}
      {/*    <Heading>WTF #2: type-dependent rendering</Heading>*/}

      {/*      <CodePane language='javascript'>{`*/}
      {/*        let x = [1, 2, 3].includes(2);*/}
      {/*        let y = "lolkek".includes("kek");*/}
      {/*      `}</CodePane>*/}
      {/*      ↓*/}
      {/*      <CodePane language='php'>{`*/}
      {/*        $x = in_array(2, [1, 2, 3], true);*/}
      {/*        $y = strpos("lolkek", "kek") !== false;*/}
      {/*      `}</CodePane>*/}

      {/*  </FlexBox>*/}
      {/*  <Notes>*/}
      {/*    - Аналогично и с полиморфными методами стандартной библиотеки*/}
      {/*  </Notes>*/}
      {/*</Slide>*/}

      {/*<Slide>*/}
      {/*  <FlexBox height="100%" flexDirection="column">*/}
      {/*    <Heading>WTF #3: dead code elimination</Heading>*/}

      {/*    <CodePane language='javascript'>{`*/}
      {/*        let x = [1, 2, 3].includes(2);*/}
      {/*        let y = "lolkek".includes("kek");*/}
      {/*      `}</CodePane>*/}
      {/*    ↓*/}
      {/*    <CodePane language='php'>{`*/}
      {/*        // .... 🕸*/}
      {/*      `}</CodePane>*/}

      {/*  </FlexBox>*/}
      {/*  <Notes>*/}
      {/*    - Самая дезориентирующая хрень<br />*/}
      {/*    - Например: есть onclick в компоненте, на сервере он не нужен<br />*/}
      {/*    - И все его зависимости не нужны.<br />*/}
      {/*    - Убираем одну - появляются другие*/}
      {/*  </Notes>*/}
      {/*</Slide>*/}

      {/*<Slide>*/}
      {/*  <FlexBox height="100%" flexDirection="column">*/}
      {/*    <Heading>WTF #3: dead code elimination</Heading>*/}

      {/*    <OrderedList>*/}
      {/*      <Appear>*/}
      {/*        <ListItem>Собрать все идентификаторы</ListItem>*/}
      {/*      </Appear>*/}
      {/*      <Appear>*/}
      {/*        <ListItem>Установить связи между идентификаторами</ListItem>*/}
      {/*      </Appear>*/}
      {/*      <Appear>*/}
      {/*        <ListItem>Задать исходно используемые идентификаторы</ListItem>*/}
      {/*      </Appear>*/}
      {/*      <Appear>*/}
      {/*        <ListItem>Обходим граф и помечаем используемые идентификаторы</ListItem>*/}
      {/*      </Appear>*/}
      {/*      <Appear>*/}
      {/*        <ListItem>При генерации кода не генерируем выражения инициализации неиспользуемых идентификаторов ¯\_(ツ)_/¯</ListItem>*/}
      {/*      </Appear>*/}
      {/*    </OrderedList>*/}

      {/*  </FlexBox>*/}
      {/*  <Notes>*/}
      {/*    - идем по пунктам с подробностями.<br />*/}
      {/*    1) ...<br />*/}
      {/*    2) кто кого использует?<br />*/}
      {/*    3) export, console.log<br />*/}
      {/*    4) ...*/}
      {/*  </Notes>*/}
      {/*</Slide>*/}

      <Slide>
        <FlexBox height="100%">
          <Heading>А что там с внедрением?</Heading>
          <img src={AdoptionImage} width="450px" alt='' />
        </FlexBox>
        <Notes>
          - Мобильная версия VK - да.<br />
          - Еще пара подпроектов - да<br />
          - А вообще инструмент в опенсорсе в NPM и в гитхабе VK (без рекламы).
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
          - Куда копнуть в теории? Книги.<br />
          - Ахо-Ульман - библия компиляторщика<br />
          - Lex/Bison - для знакомых с С/С++. Например php их юзает.<br />
          - Готовые штуки - espree (eslint!), ts compiler api
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%">
          <img src={QuestionsImage} width="600px" alt='' />
          <FlexBox flexDirection="column">
            <Heading>Спасибо за внимание!</Heading>
            <UnorderedList>
              <ListItem>Олег Клименко</ListItem>
              <ListItem>Mailto: me@ctizen.dev</ListItem>
              <ListItem>https://github.com/ctizen</ListItem>
            </UnorderedList>
          </FlexBox>
        </FlexBox>
      </Slide>
    </Deck>
  );
}

export default App;
