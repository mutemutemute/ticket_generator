const { sql } = require("../dbConnection");

exports.createTicket = async (newTicket) => {
    
        const [ticket] = await sql`
       INSERT INTO tickets ${sql(newTicket, "full_name", "email", "github_username","ticket_id")}
       
       RETURNING * `;
        return ticket;
      
}

exports.findByEmail = async (email) => {
  const [user] = await sql`SELECT tickets.*
 FROM tickets 
 WHERE email = ${email}`;
  return user;
};