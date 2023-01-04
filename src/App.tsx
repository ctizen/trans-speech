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
  CodePane
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
            Всем привет! Меня зовут Олег. Сегодня я буду в легком обзорном стиле рассказывать про
            компиляторы, транспиляторы и прочие инструменты для перевода кода с одного языка на другой.
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
            Я выходец из НГТУ с факультета вычислительной техники, отучился на специальности "мастер на все руки",
            умею в программирование, сети, микроконтроллеры и прочий computer science, полирнул это все магистратурой
            по направлению системной аналитики, но на самом деле это не важно.
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
            Успел поработать в 2гис, wrike, Вконтакте, подрасти с середнячкового мидла до должности архитектора,
            уйти обратно на мидла (правда в другую компанию) с сохранением зарплаты, ныне работаю так сказать в
            стартапе внутри стартапа.
          </Notes>
        </FlexBox>
      </Slide>

      <Slide>
      <FlexBox height="100%">
        <Heading>Как понять, что мне нужен транспилятор?</Heading>
        <Notes>
          Главный вопрос, с которого всегда стоит начинать подходить к делу это вопрос "нафига".
          Может быть вам не нужен транспилятор, а достаточно уже существующих инструментов для
          парсинга и модификации синтаксических деревьев? Может быть вам не нужно изобретать новый DSL
          и можно обойтись средствами вашего любимого ЯП?

          Если вы точно уверены, что без DSL никак не обойтись, или если вы точно знаете, что готовых
          инструментов нет, а код переводить надо - добро пожаловать в кроличью нору. Во второй части презентации
          я расскажу про собственный кейс, когда понадобилось делать транспилятор своими руками, а пока...
        </Notes>
      </FlexBox>
    </Slide>

      <Slide>
        <FlexBox height="100%">
          <Heading>Матчасть</Heading>
          <Notes>
            Для начала дам немного терминологии и общих понятий, поскольку без этого дальше будет сложно.
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
            TODO
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
          Смысл лексического анализатора в том, чтобы разбить текст на токены разных типов. Исходя из набора символов
          в токене можно сделать вывод о том, к какому типу принадлежит токен. Обычно это делается при помощи набора
          заранее заданных правил, из которых строится некоторый конечный автомат, на выходе дающий тип найденного токена.
          В более простых реализациях лексических анализаторов можно встретить и просто набор регулярных выражений
          (которые, к слову, работают совершенно аналогичным образом под капотом - строя конечный автомат, единственное
          отличие - регулярные выражения дают на выходе признак true/false вместо конкретного типа токена).

          На выхлопе получается плоский список токенов, который в дальнейшем используется синтаксическим анализатором.
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
          Синтаксический анализатор берет на вход последовательность токенов и при помощи определенных правил строит на их
          основе синтаксическое дерево - AST, abstract syntax tree. Механизм похож на то, что происходит внутри лексического
          анализатора, внутри точно так же существует некий конечный автомат со стековой памятью, формирующий узел поддерева
          в случае если последовательность токенов синтаксически корректна.

          Мы вернемся к этому примеру чуть позже, когда будем говорить подробнее о структуре кодогенераторов.
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
          А дальше - кроличья нора кастомной логики, придающей коду какую-то семантику. Можно преобразовывать AST
          тем или иным образом, приводя его в соответствие AST другого языка (привет, транспиляция). Можно пытаться
          генерировать код из AST напрямую, если вы достаточно отважны, при чем это может быть и машинный код,
          и байт-код, и исходный код на другом языке. Дальше можно развивать идею в сторону написания виртуальных
          машин, интерпретаторов, just-in-time компиляций, оптимизаций времени компиляции - конечно же это мы рассматривать
          сейчас не будем, потому что время очень ограничено.
        </Notes>
      </Slide>

      <Slide>
        TODO: слайд или два с попыткой преобразовать пример выше в другой язык

        TODO: про терминальные и нетерминальные символы, про базовые сведения о грамматиках - полезно будет дальше.
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
          Если вам интересно копнуть чуть глубже и познакомиться с тем как именно реализуются лексические и синтаксические
          анализаторы, можно ознакомиться с книгами Ахо-Ульмана и Карпова. Книга Ахо и Ульмана считается настольной библией
          любого компиляторщика, поэтому очень ее рекомендую.

          Если вы хорошо знакомы с C/C++, то стоит посоветовать готовые инструменты для построения лексических и
          синтаксических анализаторов от проекта GNU - lex и bison соответственно. Если вдруг вам понадобится создать
          новый язык программирования, идеи из lex и bison могут в этом очень помочь.

          Для парсинга JS у нас есть уже готовые инструменты, такие как typescript compiler и espree, последний к слову
          используется в eslint для парсинга и модификации синтаксических деревьев. Если понадобится каким-то образом
          парсить JS или TS, то первым и, вероятно, лучшим вариантом будет использование одного из этих инструментов.
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%">
          <Heading>История боли</Heading>
        </FlexBox>
        <Notes>
          Достоверно известно, что людям нравится, когда другим людям больно. Так что теперь хочу рассказать
          про собственный опыт на этом поприще, это точно более весело чем нудные теоретические выкладки.
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
          Перенесемся в конец 2019 года, когда ваш покорный все еще работал в VK и пилил всякие инфраструктурные штуковины
          для других команд разработки.
          (клик)
          В это время команда инфраструктуры помогала внедрять React на проекте - да, большие
          кодобазы это всегда ооочень медленные обновления и внедрения технологий. Могу рассказать пару страшных историй про
          это после презентации.
          Так вот. В какой-то момент ребята на фронтенде захотели не просто реакт, а еще и SSR.
          (клик)
          Но был нюанс. На бэкенде у нас было только kphp и ничего кроме него. Надо было как-то решать вопрос.
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
          1) Поставить ноду. Но ноду админы ставить отказались из-за сложностей при переделывании процессов деплоя и
             потенциально такой нагрузки, которую нода не вывезет.
          2) Взять v8 и запихнуть его в бинарник vkcom, обмазать биндингами и молиться. Наверное, вы уже догадались, куда нас
             с такими запросами послали в команде kphp.
          3) Взять какой-нибудь graalVM - к сожалению, вариант отпал, поскольку java. Однако нам было достоверно известно, что
             эта схема прекрасно взлетела у Одноклассников.
          4) Взять JS и сделать из него PHP. Это была бы абсолютно дурная идея, если бы не все вышесказанное и не тот факт,
             что на тот момент такой инструмент в VK уже существовал, назывался он js2php и работал в мобильной версии
             в связке с самописным фреймворком для работы с virtualDOM. js2php кстати был написан на espree.
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
          Поскольку мы довольно ограничены во времени и в ресурсах, нам нужно принять несколько допущений, облегчающих жизнь.

          Во-первых, мы допускаем, что код на выходе может значительно отличаться от кода на входе. Что значит "значительно"?
          Это значит, что возможности исходного языка, которых нет в целевом языке, должны эмулироваться при транспиляции любыми
          доступными средствами. Основная цель - результат выполнения кода на целевом языке должен полностью соответствовать
          результату выполнения кода на исходном языке.

          Во-вторых, мы допускаем, что все возможные конструкции языка мы поддерживать не будем, а поддержим только некоторое
          подмножество. Это сильное допущение, которое резко упрощает и ускоряет работу над транспилятором.
          Например, в данном случае мы решили не поддерживать классы, а для реакта требовать только функциональные
          компоненты.

          В-третьих, на выходе должен получиться код, который имеет плюс-минус статическую типизацию. Почему "плюс-минус" -
          потому что kphp умеет работать с mixed-типами, хоть это и не очень быстро, но гораздо лучше если типы будут
          явно указанными.
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
          Исходя из вышесказанного мы очевидно будем выбирать typescript compiler api, и как следствие это
          предопределяет технологический стек, на котором будет пилиться вся затея.

          Приятно, что все инструменты для работы с AST нам предоставит compiler api.

          Также предполагаем, что поскольку не требуется полная поддержка всех синтаксических конструкций,
          проще сразу написать генератор кода, чем пытаться соорудить AST для готовых генераторов (которые
          к тому же еще и очевидно будут иметь другой технологический стек).
        </Notes>
      </Slide>

      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading>Общая схема генерации кода</Heading>
          <MermaidReact id='renderNode' mmd={diagrams.renderNode} />
        </FlexBox>
        <Notes>
          Исходя из того, что мы имеем дело с контекстно-свободной грамматикой, можем верхнеуровнево представить
          генератор кода как рекурсивный обход AST, выдающий текст на целевом языке. Важным моментом является
          то, что все терминальные ноды AST мы рендерим как есть, т.е. без дополнительных рекурсивных вызовов.
          Терминальными являются в общем случае все ноды, которые являются токенами, литералами и ключевыми словами.

          Обычно достаточно просто определить, является ли дочерняя нода AST терминальной или нет - достаточно попытаться
          подставить на ее место какое-нибудь выражение и если получается синтаксически валидное выражение - значит
          дочерняя нода является нетерминальной и для нее следует рекурсивно вызвать функцию рендера.
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
          По нашему примеру можно сказать, что слово let является терминальной нодой, а все остальные - нет.

          Другими словами, например, вместо x можно подставить оператор деструктуризации, который может являться
          комплексным выражением - и синтаксис все еще будет корректен. Аналогично с идентификаторами y и toString.

          Заметим, кстати, что токены "=", "." и "()" отсутствуют в нашем AST, поскольку они уже выполнили свою роль -
          на их основании были соответствующим образом определены типы выражений.
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
          Кажется это был первый челлендж, непосредственно связанный с отличием между языками: в js/ts
          переменные из внешнего скоупа просачиваются во вложенные скоупы автоматически. В php это не так:
          программист должен явным образом указать, какие переменные нужно захватить в замыкании.

          Что делать?
          Очевидно, или не очень очевидно, но все что мы можем тут сделать - это вести список переменных в каждом
          скоупе и отслеживать обращения к переменным на верхних уровнях. Если такое обращение произошло - значит
          надо добавить эту переменную в конструкцию use().
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
          Есть еще нюанс с модификацией переменных внутри замыкания. В общем случае в обычном php это вполне себе работает -
          достаточно только указать, что переменная передается по ссылке.
          (клик)
          К сожалению, в kphp такое не прокатило, поскольку там внутрь замыкания переменные передаются только в readonly-режиме,
          во избежание гонок при взаимодействии с одной и той же областью памяти из разных потоков.
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
          Еще один кек, связанный с отличием между языками, заключается в большей полиморфности некоторых операторов js,
          по сравнению с операторами php. В частности, в js оператор + используется и для сложения, и для конкатенации.

          (привет всем кто делал мемы про конкатенацию в JS)

          В php же для конкатенации используется оператор точка. Как думаете, что должно произойти в третьем случае?
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
          Ну, очевидно, код должен работать аналогично, поэтому тут только оператор точка.

          (еще раз привет всем кто делал мемы про конкатенацию в JS)

          Как это все работает? Тут нам на помощь спешит тот факт, что мы все же выбрали Typescript, а не JS,
          соответственно при обходе AST у нас есть некоторая информация от тайпчекера, которую мы можем использовать
          для правильного определения оператора. Если хотя бы один из аргументов выводится в строку - значит используем
          оператор точка.
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
          Примерно по аналогичной схеме можно разрулить и одноименные методы объектов стандартной библиотеки. Например,
          если объект резолвится во что-то похожее на массив, мы применяем функцию in_array, а если это что-то строкообразное -
          то проверяем через strpos.
        </Notes>
      </Slide>
    </Deck>
  );
}

export default App;
