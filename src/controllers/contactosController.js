const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM contactos', (err, contactos) =>{
            if(err){
                res.json(err);
            }
            res.render('contactos', {
                data: contactos
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('Insert into Contactos (nombre,apellidos,correo,fecha_nac,foto) Values ?', [data], (err, contactos) => {
            console.log(contactos);
            res.redirect('/');
        });
    });
};

controller.edit = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM contactos WHERE id = ?', [id], (err, contactos) => {
            res.render('contactos_edit', {
                data: contactos[0]
            })
        });
    });
};

controller.update = (req, res) => {
    const id = req.params.id;
    const newContacto = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE Contactos SET ? WHERE id = ?',[newContacto, id], (err, rows) => {
            res.redirect('/');
        });
    });
}

controller.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM Contactos WHERE id = ?',[id], (err, rows) => {
            res.redirect('/');
        });
    });
};

module.exports = controller;