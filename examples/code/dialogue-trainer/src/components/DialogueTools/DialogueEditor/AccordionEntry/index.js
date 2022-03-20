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

class AccordionEntry extends React.Component {

    render() {
        return (
          <div className="accordion-item">
            <h2 className="accordion-header" id={"panelsStayOpen-heading" + this.props.id}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#panelsStayOpen-collapse" + this.props.id} aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                {this.props.headerText}
              </button>
            </h2>
            <div id={"panelsStayOpen-collapse" + this.props.id} className="accordion-collapse collapse" aria-labelledby={"panelsStayOpen-heading" + this.props.id}>
              <div className="accordion-body">
                {this.props.child}
              </div>
            </div>
          </div>
        )
    }
}

export default AccordionEntry;