import './App.css';
import MainpageImage from '../../trans-speech/src/img/mainpage.png';
import NstuImage from '../../trans-speech/src/img/nstu.png';
import GisImage from '../../trans-speech/src/img/2gis.png';
import WrikeImage from '../../trans-speech/src/img/wrike.png';
import VkImage from '../../trans-speech/src/img/vk.png';
import FpjsImage from '../../trans-speech/src/img/fingerprint.png';
import customTheme from '../../trans-speech/src/theme/theme-default';
import {Deck, FlexBox, Heading, Notes, Slide, AnimatedProgress, Box, FullScreen} from "spectacle";

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
    <Deck theme={customTheme} template={template}>
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
    </Deck>
  );
}

export default App;
