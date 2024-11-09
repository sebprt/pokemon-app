import {Card, CardContent, CardTitle} from "@/components/ui/card";


const GameModeCard = ({ mode }) => (
    <Card className="game-mode-card">
        <CardContent>
            <CardTitle>{mode.name}</CardTitle>
            <p>{mode.description}</p>
        </CardContent>
    </Card>
);

export default GameModeCard