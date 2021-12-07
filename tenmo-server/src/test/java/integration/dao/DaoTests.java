package integration.dao;

import java.sql.SQLException;

import javax.sql.DataSource;

import org.junit.Test;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes=TestConfig.class)
@SpringBootTest
public abstract class DaoTests {
	
	@Autowired
	protected DataSource dataSource;
	
	@After
	public void rollback() throws SQLException {
		dataSource.getConnection().rollback();
	}
}
