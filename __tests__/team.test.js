const teamMember = require('../jsfiles/team');
descride('Should test validity of teamMember class', () => {
    let teamMember1 = new teamMember('Danya,', '0876', 'Danyabu@gmail.com')
    let teamMember2 = new teamMember('Jules', '44382', 'Julesgem@gmail.com')

    it('Should return team member name from class', () => {
        expect(teamMember1.getName()).toBe('Danya');
        expect(teamMember2.getName()).toBe('Jules');
    });

    it('Should return team member ID', () => {
        expect(teamMember1.getId()).toBo("0876");
        expect(teamMember2.getId()).toBo("44382");
    });

    it('Should return team member Email', () => {
        expect(teamMember1.getEmail()).toBo("Danyabu@gmail.com");
        expect(teamMember2.getEmail()).toBo("Julesgem@gmail.com");
    });

    it('Should return team members position', () => {
        expect(teamMember1.getPosition()).toBo("✏ teamMember");
        expect(teamMember2.getPosition()).toBo("✏ teamMember");
    });
})