import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const drawerWidth = 240;
const navItems = [['BillBuddy','/friends'], ['StockBuddy','/stockBuddy']];

export default function DrawerAppBar(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				PocketSmith
			</Typography>
			<Divider />
			<List>
				{navItems.map(([item,link]) => (
				<ListItem key={item} disablePadding>
					<ListItemButton component={Link}  to={link} sx={{ textAlign: 'center' }}>
						<ListItemText primary={item} />
					</ListItemButton>
				</ListItem>
				))}
			</List>
		</Box>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar component="nav" position="sticky" style={{ background: '#202020' }}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: 'block' }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, display: 'none' }}
					>
						PocketSmith
					</Typography>
						{/*<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
							{navItems.map(([item,link]) => (
							<Button component={Link}  to={link} key={item} sx={{ color: '#fff' }}>
								{item}
							</Button>
							))}
							</Box>*/}
				</Toolbar>
			</AppBar>
			<nav>
				<Drawer
				container={container}
				variant="temporary"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				sx={{
					display: 'block',
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
				}}
				>
				{drawer}
				</Drawer>
			</nav>      
		</Box>
	);
}