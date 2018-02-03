USE FreshMuffin;

DROP TABLE IF EXISTS `client`;

CREATE TABLE client (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  site_id INT UNIQUE NOT NULL,
  phone VARCHAR(255),  
  address VARCHAR(255) NOT NULL,
  latitude VARCHAR(255) NOT NULL,
  longitude VARCHAR(255) NOT NULL,
  date INT NOT NULL,
  time_window INT NOT NULL
);

