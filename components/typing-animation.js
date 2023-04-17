import Typical from 'react-typical';

export default function TypingAnimation() {
    return (
        <div>
            <Typical
            steps={[
            '자신만의 이야기로 동화책을 만들어보세요!',
            1000,
            ]}
            wrapper="p"
            loop={Infinity}
            />
        </div>
    )
  }
