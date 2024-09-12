import { useParams } from 'react-router-dom';

function GptDetailPage(){
    const { gptId } = useParams<{ gptId: string }>();
    return (
        <h1>GPT Detail Page {gptId}</h1>
    );
}

export default GptDetailPage;