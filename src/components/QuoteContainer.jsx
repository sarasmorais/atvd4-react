export function QuoteContainer(){
    return (
        <div className="quote-container">
            <div id="loading" class="loading">Carregando citação...</div>
            <div id="error" class="error" style="display: none;"></div>
            <div id="quote-content" style="display: none;">
                <p className="quote" id="quote-text"></p>
                <div className="anime-info">
                    <div>
                        <span>Anime: </span>
                        <span className="anime" id="anime-name"></span>
                    </div>
                    <div>
                        <span>Personagem: </span>
                        <span className="character" id="character-name"></span>
                    </div>
                </div>
            </div>
        </div>
    )
};