/*
Copyright (C) 2022  André Schepers

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
import React from 'react';

import './style.scss';

class EmbedYoutube extends React.Component {

    render() {
        return (
            <div className="youtube-wrapper">
                <div className="youtube-embed-container container">
                    <iframe src={"https://www.youtube.com/embed/"+ this.props.embedId + "?cc_load_policy=1"}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        )
    }
}

export default EmbedYoutube;