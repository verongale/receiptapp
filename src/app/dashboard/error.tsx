"use client";

export default function Error({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div>
            <h2>Si è verificato un errore.</h2>

            <button onClick={() => reset()}>
                Riprova
            </button>
        </div>
    );
}