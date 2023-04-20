import Typical from 'react-typical';

export default function TypingAnimation({text}) {
    return (
        <div>
            <Typical
            steps={[
            text,
            10000,
            ]}
            wrapper="p"
            loop={Infinity}
            /> 
        </div>
    )
}
