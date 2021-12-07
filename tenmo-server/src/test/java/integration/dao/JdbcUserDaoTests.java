package integration.dao;

import com.techelevator.tenmo.dao.JdbcUserDao;
import com.techelevator.tenmo.model.User;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;

public class JdbcUserDaoTests extends DaoTests {
	
	private static final User USER_1 = new User(1001L, "test", "password", "user");
	
	
	private JdbcUserDao sut;
	
	private User user;
	

    @Before
    public void setup() {
        DataSource dataSource = this.dataSource;
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
        sut = new JdbcUserDao(jdbcTemplate);
        user = new User(1001L, "test", "password", "user");
    }

    @Test
    public void createNewUser() {
        boolean userCreated = sut.create("TEST_USER","test_password");
        Assert.assertTrue(userCreated);
        User user = sut.findByUsername("TEST_USER");
        Assert.assertEquals("TEST_USER", user.getUsername());
    }
    
    @Test
    public void find_id_by_username_returns_correct_id() {
    	long testId = (long) sut.findIdByUsername(user.getUsername());
    	long realId = user.getId();
    	Assert.assertEquals(testId, realId);
    }

}
