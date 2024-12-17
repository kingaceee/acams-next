import Radio, { PropTypes as RadioPropTypes } from '@/components/input/Radio';

const LANGUAGES: { [key: string]: string } = { ENGLISH: '영어', KOREAN: '한국어' };

export interface PropTypes {
  languages?: Array<string>;
  selectedLanguage?: string;
  onChange: (language: string) => void;
}

function LanguageRadio(props: PropTypes) {
  const { languages = [], selectedLanguage, onChange } = props;

  const handleChange: RadioPropTypes['onChange'] = e => {
    onChange(e.target.value);
  };

  return (
    <div className='radio__box'>
      {languages.map(language => {
        return (
          <Radio
            key={language}
            id={language}
            value={language}
            name='language'
            label={LANGUAGES[language]}
            checked={selectedLanguage === language}
            onChange={handleChange}
          />
        );
      })}
    </div>
  );
}

export default LanguageRadio;
