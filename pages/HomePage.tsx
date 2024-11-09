'use client';
import {useQuery} from "@tanstack/react-query";
import {fetchGameModes} from "@/services/fetchGameModes";
import GameModeCard from "@/components/GameModeCard";

export default function HomePage() {
    const  { data: gameModes, isLoading, error } = useQuery({ queryKey: ['gameModes'], queryFn: fetchGameModes })

    if (isLoading) return <p>Loading game modes...</p>;
    if (error) return <p>Failed to load game modes</p>;

    return (
        <div className="homepage">
            <h1>Choose Your Game Mode</h1>
            <div className="game-modes">
                {gameModes.map((mode) => (
                    <GameModeCard key={mode.id} mode={mode} />
                ))}
            </div>
        </div>
    );
}
