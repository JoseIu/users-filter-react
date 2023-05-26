import UserList from './components/UserList';

const USERS = [
	{
		id: 1,
		username: 'jose',
		name: 'Joselu',
		active: false,
		role: 'teacher'
	},
	{
		id: 2,
		username: 'carlos',
		name: 'Carlos',
		active: true,
		role: 'student'
	},
	{
		id: 3,
		username: 'magus',
		name: 'Magus',
		active: true,
		role: 'other'
	},
	{
		id: 4,
		username: 'paula',
		name: 'Paula',
		active: false,
		role: 'teacher'
	},
	{
		id: 5,
		username: 'moy',
		name: 'Moy',
		active: true,
		role: 'student'
	},
	{
		id: 6,
		username: 'llurba',
		name: 'Llurnus',
		active: false,
		role: 'other'
	},
	{
		id: 7,
		username: 'cristina',
		name: 'Cristina',
		active: false,
		role: 'teacher'
	},
	{
		id: 8,
		username: 'karen',
		name: 'Karen',
		active: true,
		role: 'student'
	},
	{
		id: 9,
		username: 'encedalo',
		name: 'Encedalo',
		active: true,
		role: 'other'
	}
];

const App = () => <UserList initialUseres={USERS}></UserList>;

export default App;
