import React from 'react'
import { componentStyles, cn } from '../../shared'

interface YoutubeProps {
    videoId: string
    className?: string
}

export function Youtube({ videoId, className }: YoutubeProps) {
    return (
        <div className={cn(componentStyles.youtube.container, className)}>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&autohide=1&controls=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={componentStyles.youtube.iframe}
            />
        </div>
    )
}

export default Youtube
