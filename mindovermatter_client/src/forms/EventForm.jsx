import React from "react";
import "./Form.css";

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      imgurl: "",
      organizer: "Mind/Matter",
      venue: "",
      artists: "",
      supporting_artists: "",
      ticket_link: "",
      past_event: null
    };
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.props.handleSubmit}>
          <label />
          <input
            placeholder="Date"
            value={this.props.date}
            name="date"
            required
            onChange={this.props.handleChange}
          />

          <label />
          <input
            placeholder="Artwork URL"
            value={this.props.imgurl}
            name="imgurl"
            required
            onChange={this.props.handleChange}
          />

          <label />
          <input
            placeholder="Organizer"
            value={this.props.organizer}
            name="organizer"
            required
            onChange={this.props.handleChange}
          />

          <label />
          <input
            placeholder="Venue"
            value={this.props.venue}
            name="venue"
            required
            onChange={this.props.handleChange}
          />

          <label>Separate Artists/Supporting Artists with a comma</label>
          <input
            placeholder="Artists"
            value={this.props.artists}
            name="artists"
            required
            onChange={this.props.handleChange}
          />

          <label />
          <input
            placeholder="Supporting Artists"
            value={this.props.supporting_artists}
            name="supporting_artists"
            required
            onChange={this.props.handleChange}
          />

          <label />
          <input
            placeholder="Link to buy tickets"
            value={this.props.ticket_link}
            name="ticket_link"
            required
            onChange={this.props.handleChange}
          />

          <label>Has this event happened already?</label>
          <select
            defaultValue={null}
            name="past_event"
            onChange={this.props.handleChange}
          >
            <option value={null} label="Choose One" />
            <option value={true} label="Yes" />
            <option value={false} label="No" />
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default EventForm;
